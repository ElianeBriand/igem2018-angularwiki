"use strict";

import * as d3 from 'd3';


/*!
 * @license Open source under BSD 2-clause (http://choosealicense.com/licenses/bsd-2-clause/)
 * Copyright (c) 2015, Curtis Bratton
 * All rights reserved.
 *
 * Liquid Fill Gauge v1.1
 */
export function liquidFillGaugeDefaultSettings() {
  return {
    minValue: 0, // The gauge minimum value.
    maxValue: 100, // The gauge maximum value.
    circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
    circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
    circleColor: "#178BCA", // The color of the outer circle.
    waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
    waveCount: 1, // The number of full waves per width of the wave circle.
    waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
    waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
    waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
    waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
    waveAnimate: true, // Controls if the wave scrolls or is static.
    waveColor: "#178BCA", // The color of the fill wave.
    waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
    textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
    textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
    valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
    displayPercent: true, // If true, a % symbol is displayed after the value.
    textColor: "#045681", // The color of the value text when the wave does not overlap it.
    waveTextColor: "#A4DBf8", // The color of the value text when the wave overlaps it.
    customPercent: "%"
  };
}

export function loadLiquidFillGauge(d3selector, value, config) {

  var gauge = d3.select(d3selector);
  var radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height"))) / 2;
  var locationX = parseInt(gauge.style("width")) / 2 - radius;
  var locationY = parseInt(gauge.style("height")) / 2 - radius;
  var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;
  var uniqueID = Math.floor(Math.random() * 100) + 1;

  var waveHeightScale;
  if (config.waveHeightScaling) {
    waveHeightScale = d3.scaleLinear()
      .range([0, config.waveHeight, 0])
      .domain([0, 50, 100]);
  } else {
    waveHeightScale = d3.scaleLinear()
      .range([config.waveHeight, config.waveHeight])
      .domain([0, 100]);
  }

  var textPixels = (config.textSize * radius / 2);
  var textFinalValue = parseFloat(value).toFixed(2);
  var textStartValue = config.valueCountUp ? config.minValue : textFinalValue;
  var percentText = config.displayPercent ? config.customPercent : "";
  var circleThickness = config.circleThickness * radius;
  var circleFillGap = config.circleFillGap * radius;
  var fillCircleMargin = circleThickness + circleFillGap;
  var fillCircleRadius = radius - fillCircleMargin;
  var waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);

  var waveLength = fillCircleRadius * 2 / config.waveCount;
  var waveClipCount = 1 + config.waveCount;
  var waveClipWidth = waveLength * waveClipCount;

  // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
  var textRounder = function (value) {
    return Math.round(value);
  };
  if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
    textRounder = function (value) {
      return parseFloat(value).toFixed(1);
    };
  }
  if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
    textRounder = function (value) {
      return parseFloat(value).toFixed(2);
    };
  }

  // Data for building the clip wave area.
  var data = [];
  for (var i = 0; i <= 40 * waveClipCount; i++) {
    data.push({x: i / (40 * waveClipCount), y: (i / (40))});
  }

  // Scales for drawing the outer circle.
  var gaugeCircleX = d3.scaleLinear().range([0, 2 * Math.PI]).domain([0, 1]);
  var gaugeCircleY = d3.scaleLinear().range([0, radius]).domain([0, radius]);

  // Scales for controlling the size of the clipping path.
  var waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
  var waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);

  // Scales for controlling the position of the clipping path.
  var waveRiseScale = d3.scaleLinear()
  // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
  // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
  // circle at 100%.
    .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
    .domain([0, 1]);
  var waveAnimateScale = d3.scaleLinear()
    .range([0, waveClipWidth - fillCircleRadius * 2]) // Push the clip area one full wave then snap back.
    .domain([0, 1]);

  // Scale for controlling the position of the text within the gauge.
  var textRiseScaleY = d3.scaleLinear()
    .range([fillCircleMargin + fillCircleRadius * 2, (fillCircleMargin + textPixels * 0.7)])
    .domain([0, 1]);

  // Center the gauge within the parent SVG.
  var gaugeGroup = gauge.append("g")
    .attr('transform', 'translate(' + locationX + ',' + locationY + ')');

  // Draw the outer circle.
  var gaugeCircleArc = d3.arc()
    .startAngle(gaugeCircleX(0))
    .endAngle(gaugeCircleX(1))
    .outerRadius(gaugeCircleY(radius))
    .innerRadius(gaugeCircleY(radius - circleThickness));
  gaugeGroup.append("path")
    .attr("d", gaugeCircleArc)
    .style("fill", config.circleColor)
    .attr('transform', 'translate(' + radius + ',' + radius + ')');

  // Text where the wave does not overlap.
  var text1 = gaugeGroup.append("text")
    .text(textRounder(textStartValue) + percentText)
    .attr("class", "liquidFillGaugeText")
    .attr("text-anchor", "middle")
    .attr("font-size", textPixels + "px")
    .style("fill", config.textColor)
    .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');

  // The clipping wave area.
  var clipArea = d3.area()
    .x(function (d) {
      return waveScaleX(d.x);
    })
    .y0(function (d) {
      return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI));
    })
    .y1(function (d) {
      return (fillCircleRadius * 2 + waveHeight);
    });
  var waveGroup = gaugeGroup.append("defs")
    .append("clipPath")
    .attr("id", "clipWave" + uniqueID.toString());
  var wave = waveGroup.append("path")
    .datum(data)
    .attr("d", clipArea)
    .attr("T", 0);

  // The inner circle with the clipping wave attached.
  var fillCircleGroup = gaugeGroup.append("g")
    .attr("clip-path", "url(#clipWave" + uniqueID.toString() + ")");
  fillCircleGroup.append("circle")
    .attr("cx", radius)
    .attr("cy", radius)
    .attr("r", fillCircleRadius)
    .style("fill", config.waveColor);

  // Text where the wave does overlap.
  var text2 = fillCircleGroup.append("text")
    .text(textRounder(textStartValue) + percentText)
    .attr("class", "liquidFillGaugeText")
    .attr("text-anchor", "middle")
    .attr("font-size", textPixels + "px")
    .style("fill", config.waveTextColor)
    .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');

  // Make the value count up.
  if (config.valueCountUp) {
    var textTween = function () {
      var i = d3.interpolate(textStartValue, textFinalValue);
      return function (t) {
        text1.text(textRounder(i(t)) + percentText);
        text2.text(textRounder(i(t)) + percentText);
      }
    };
    text1.transition()
      .duration(config.waveRiseTime)
      .tween("text", textTween);
    text2.transition()
      .duration(config.waveRiseTime)
      .tween("text", textTween);
  }

  // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
  var waveGroupXPosition = fillCircleMargin + fillCircleRadius * 2 - waveClipWidth;
  if (config.waveRise) {
    waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(0) + ')')
      .transition()
      .duration(config.waveRiseTime)
      .attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')')
      .on("start", function () {
        wave.attr('transform', 'translate(1,0)');
      }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
  } else {
    waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')');
  }

  function animateWave() {
    wave.attr('transform', 'translate(' + waveAnimateScale(wave.attr('T')) + ',0)');
    wave.transition()
      .duration(config.waveAnimateTime * (1 - wave.attr('T')))
      .ease(d3.easeLinear)
      .attr('transform', 'translate(' + waveAnimateScale(1) + ',0)')
      .attr('T', 1)
      .on('end', function () {
        wave.attr('T', 0);
        animateWave(config.waveAnimateTime);
      });
  }

  if (config.waveAnimate) animateWave();


  var GaugeUpdater = {
    update(value) {
      var newFinalValue = parseFloat(value).toFixed(2);
      var textRounderUpdater = function (value) {
        return Math.round(value);
      };
      if (parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))) {
        textRounderUpdater = function (value) {
          return parseFloat(value).toFixed(1);
        };
      }
      if (parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))) {
        textRounderUpdater = function (value) {
          return parseFloat(value).toFixed(2);
        };
      }


      var textTween = function () {
        var i = d3.interpolate(text1.text(), parseFloat(value).toFixed(2));
        return function (t) {
          text1.text(textRounderUpdater(i(t)) + percentText);
          text2.text(textRounderUpdater(i(t)) + percentText);
        }
      };

      text1.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);
      text2.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);


      var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;
      var waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);
      var waveRiseScale = d3.scaleLinear()
      // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
      // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
      // circle at 100%.
        .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
        .domain([0, 1]);
      var newHeight = waveRiseScale(fillPercent);
      var waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
      var waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);
      var newClipArea;
      if (config.waveHeightScaling) {
        newClipArea = d3.svg.area()
          .x(function (d) {
            return waveScaleX(d.x);
          })
          .y0(function (d) {
            return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI));
          })
          .y1(function (d) {
            return (fillCircleRadius * 2 + waveHeight);
          });
      } else {
        newClipArea = clipArea;
      }

      var newWavePosition = config.waveAnimate ? waveAnimateScale(1) : 0;
      wave.transition()
        .duration(0)
        .transition()
        .duration(config.waveAnimate ? (config.waveAnimateTime * (1 - wave.attr('T'))) : (config.waveRiseTime))
        .ease(d3.easeLinear)
        .attr('d', newClipArea)
        .attr('transform', 'translate(' + newWavePosition + ',0)')
        .attr('T', '1')
        .on("end", function () {
          if (config.waveAnimate) {
            wave.attr('transform', 'translate(' + waveAnimateScale(0) + ',0)');
            animateWave(config.waveAnimateTime);
          }
        });
      waveGroup.transition()
        .duration(config.waveRiseTime)
        .attr('transform', 'translate(' + waveGroupXPosition + ',' + newHeight + ')')
    }
  };

  return GaugeUpdater;
}


function form_outline_d(form_n, x, y) {

  // square
  if (form_n == 0) {
    return "M" + (x) + "," + (y) + "l10,0 l0,10 l-10,0 z"
  }

  // triangle
  if (form_n == 1) {
    return "M" + (x) + "," + (y + 10) + "l5,-10 l5,10 z"
  }

  // circle
  if (form_n == 2) {
    return "M" + (x) + "," + (y + 5) + "a 5 5 0 1 0 0.01 0 z"
  }

}


export function start_inventory_animation() {

  // vis config variables

  var svg = d3.select("#inventory-cycle")

  var speed = 0.00015 // ticks per millisecond

  var outer_r = 210
  var inner_r = 160

  var center_x = 289
  var center_y_main = 380
  var center_y_in = -30

  // mapping functions

  var coord_x_in = function (r, a) {
    return center_x + r * Math.cos(a)
  }
  var coord_y_in = function (r, a) {
    return center_y_in + r * Math.sin(a)
  }

  var coord_x_main = function (r, a) {
    return center_x + r * Math.cos(a)
  }
  var coord_y_main = function (r, a) {
    return center_y_main + r * Math.sin(a)
  }

  var angle_in = function (t, t1, t2) {
    var rel_t
    if (t2 == t1) {
      rel_t = 1
    }
    else {
      rel_t = (t - t1) / (t2 - t1)
    }
    var a = (180.0 - 90.0 * rel_t) * (Math.PI / 180.0)
    return a
  }

  var angle_main = function (t, t1, t2, e1, e2) {
    // compute angle in circle for a dot,
    // given its previous and next events, their timestamps, and the current time
    var rel_t
    if (t2 == t1) {
      rel_t = 1
    }
    else {
      rel_t = (t - t1) / (t2 - t1)
    }

    if (e2 == 1) {
      return (90.0 + 180.0 * rel_t) * (Math.PI / 180.0)
    }

    if (e2 == 2) {
      return (-90.0 + 135.0 * rel_t) * (Math.PI / 180.0)
    }

    if (e2 == 3) {
      return (-90.0 + 135.0 + 45.0 * rel_t) * (Math.PI / 180.0)
    }

  }

  // internal state variables
  var particle_count = 0
  var current_events = []

  d3.timer(function (t_ms) {
    var t = t_ms * speed

    // *** SIMULATION ***

    // check for expired events since last t
    // if previous event was #1, then move to #2 with random speed
    // if previous event was #2, then move to either #3 or #4 with some probability and random speed
    // if previous event was #3, then move to either #4 or #1 with some probability and random speed
    // if previous event was #4, then exit
    var removals = []
    current_events.forEach(function (d, i) {
      if (d.t2 < t) {
        d.t1 = d.t2
        d.e1 = d.e2
        d.t2 = d.t1 + 0.3 + Math.random() * 0.4
        if (d.e1 == 1) {
          d.e2 = 2
        } else if (d.e1 == 2) {
          if (Math.random() < 0.5) {
            d.e2 = 4;
            d.t2 = d.t1 + 0.5 * (0.3 + Math.random() * 0.4)
          }
          else {
            d.e2 = 3
          }
        } else if (d.e1 == 3) {
          if (Math.random() < 0.5) {
            d.e2 = 4;
            d.t2 = d.t1 + 0.5 * (0.3 + Math.random() * 0.4)
          }
          else {
            d.e2 = 1
          }
        } else {
          removals.push(i)
        }
      }
    })

    for (var i = removals.length - 1; i > -1; i--) {
      current_events.splice(removals[i], 1)
    }

    // add some new particles, with some probability and random speed
    for (var i = 0; i < 2; i++) {
      if (Math.random() < 0.2) {
        particle_count += 1
        current_events.push({
          'particle_id': particle_count,
          'rad': inner_r + (outer_r - inner_r) * Math.random(),
          'sil': 1,
          't1': t,
          't2': t + 0.5 * (0.3 + Math.random() * 0.4),
          'e1': 0,
          'e2': 1
        })
      }
    }

    // *** UPDATE SVG ANIMATION ***

    var inventory_items = svg.selectAll(".inventory-cycle-silhouette")
      .data(current_events, function (d) {
        return d.particle_id
      })

    inventory_items.enter().append("path")
      .attr("class", "inventory-cycle-silhouette")
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 0.5)
      .attr("opacity", 1)
      .attr("d", function (d) {
        return form_outline_d(d.sil, 290, 0)
      })

    inventory_items
      .attr("d", function (d) {

        var tx, ty

        if (d.e1 == 0) {
          var new_rad = inner_r + (outer_r - d.rad)
          if (coord_y_in(new_rad, angle_in(t, d.t1, d.t2, d.e1, d.e2)) > center_y_main - outer_r + new_rad) {
            tx = coord_x_in(new_rad, angle_in(t, d.t1, d.t2, d.e1, d.e2))
          } else {
            tx = -90 + d.rad * 2
          }
          ty = coord_y_in(new_rad, angle_in(t, d.t1, d.t2, d.e1, d.e2))
        } else if (d.e2 == 4) {
          tx = 280
          ty = 550
        } else {
          tx = coord_x_main(d.rad, angle_main(t, d.t1, d.t2, d.e1, d.e2))
          ty = coord_y_main(d.rad, angle_main(t, d.t1, d.t2, d.e1, d.e2))
        }

        return form_outline_d(d.sil, tx, ty)

      })

    inventory_items.exit().remove()


  })

}


export function gradientFlow(d3selector) {

  var target_svg = d3.select(d3selector);

  //Container for the gradient
  var defs = target_svg.append("defs");
  //Append a linear horizontal gradient
  var linearGradient = defs.append("linearGradient")
    .attr("id", "animate-gradient") //unique id for reference
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0")
    //Make sure the areas before 0% and after 100% (along the x)
    //are a mirror image of the gradient and not filled with the
    //color at 0% and 100%
    .attr("spreadMethod", "reflect");

//A color palette that is 4 colors
//(the last 3 colors are the reverse of the start)
  var colours = ["#001afd", "#6b67fc", "#5390e3", "#356cc6",
    "#5390e3", "#6b67fc", "#001afd"];

//Append the colors evenly along the gradient
  linearGradient.selectAll(".stop")
    .data(colours)
    .enter().append("stop")
    .attr("offset", function (d, i) {
      return i / (colours.length - 1);
    })
    .attr("stop-color", function (d) {
      return d;
    });

  linearGradient.append("animate")
    .attr("attributeName","x1")
    .attr("values","0%;100%")
    .attr("dur","7s")
    .attr("repeatCount","indefinite");

  //Animate the 'x2' attribute from 100% to 200% in 7 seconds
  linearGradient.append("animate")
    .attr("attributeName","x2")
    .attr("values","100%;200%")
    .attr("dur","7s")
    .attr("repeatCount","indefinite");

}


export function makeBimodal(d3selector) {

  var svg = d3.select(d3selector);
  var width = 300;
  var height = 180;
  var margin = {top: 20, right: 30, bottom: 30, left: 40};

  var x = d3.scaleLinear()
    .domain([30, 110])
    .range([margin.left, width - margin.right]);

  var y = d3.scaleLinear()
    .domain([0, 0.1])
    .range([height - margin.bottom, margin.top]);

/*  svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + (height - margin.bottom) + ")")
    .call(d3.axisBottom(x))
    .append("text")
    .attr("x", width - margin.right)
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "end")
    .attr("font-weight", "bold")
    .text("Time between eruptions (min.)");

  svg.append("g")
    .attr("class", "axis axis--y")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(d3.axisLeft(y).ticks(null, "%"));*/

  var faithful = [79,54,74,62,85,55,88,85,51,85,54,84,78,47,83,52,62,84,52,79,51,47,78,69,74,83,55,76,78,79,73,77,66,80,
    74,52,48,80,59,90,80,58,84,58,73,83,64,53,82,59,75,90,54,80,54,83,71,64,77,81,59,84,48,82,60,92,78,78,65,73,82,56,79,
    71,62,76,60,78,76,83,75,82,70,65,73,88,76,80,48,86,60,90,50,78,63,72,84,75,51,82,62,88,49,83,81,47,84,52,86,81,75,59,
    89,79,59,81,50,85,59,87,53,69,77,56,88,81,45,82,55,90,45,83,56,89,46,82,51,86,53,79,81,60,82,77,76,59,80,49,96,53,77,
    77,65,81,71,70,81,93,53,89,45,86,58,78,66,76,63,88,52,93,49,57,77,68,81,81,73,50,85,74,55,77,83,83,51,78,84,46,83,55,
    81,57,76,84,77,81,87,77,51,78,60,82,91,53,78,46,77,84,49,83,71,80,49,75,64,76,53,
    94,55,76,50,82,54,75,78,79,78,78,70,79,70,54,86,50,90,54,54,77,79,64,75,47,86,63,85,82,57,82,67,74,54,83,73,73,88,80,
    71,83,56,79,78,84,58,83,43,60,75,81,46,90,46,74];

    var n = faithful.length,
      bins = d3.histogram().domain(x.domain()).thresholds(40)(faithful),
      density = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))(faithful);

    svg.insert("g", "*")
      .attr("fill", "#bbb")
      .selectAll("rect")
      .data(bins)
      .enter().append("rect")
      .attr("x", function(d) { return x(d.x0) + 1; })
      .attr("y", function(d) { return y(d.length / n); })
      .attr("width", function(d) { return x(d.x1) - x(d.x0) - 1; })
      .attr("height", function(d) { return y(0) - y(d.length / n); });

    svg.append("path")
      .datum(density)
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("d",  d3.line()
        .curve(d3.curveBasis)
        .x(function(d) { return x(d[0]); })
        .y(function(d) { return y(d[1]); }));

  function kernelDensityEstimator(kernel, X) {
    return function(V) {
      return X.map(function(x) {
        return [x, d3.mean(V, function(v) { return kernel(x - v); })];
      });
    };
  }

  function kernelEpanechnikov(k) {
    return function(v) {
      return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
  }

}

export function animateBacteria(d3selector) {
  var width = 150,
    height = 150;

  var n = 50,
    m = 12,
    degrees = 180 / Math.PI;

  var spermatozoa = d3.range(n).map(function() {
    var x = Math.random() * width,
      y = Math.random() * height;
    return {
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
      path: d3.range(m).map(function() { return [x, y]; }),
      count: 0
    };
  });

  var svg = d3.select(d3selector);

  var g = svg.selectAll("g")
    .data(spermatozoa)
    .enter().append("g");
  var head = g.append("ellipse")
    .attr("rx", 2)
    .attr("ry", 3);
  g.append("path")
    .datum(function(d) { return d.path.slice(0, 3); })
    .attr("class", "mid");
  g.append("path")
    .datum(function(d) { return d.path; })
    .attr("class", "tail");
  var tail = g.selectAll("path");
  d3.timer(function() {
    for (var i = -1; ++i < n;) {
      var spermatozoon = spermatozoa[i],
        path = spermatozoon.path,
        dx = spermatozoon.vx,
        dy = spermatozoon.vy,
        x = path[0][0] += dx,
        y = path[0][1] += dy,
        speed = Math.sqrt(dx * dx + dy * dy),
        count = speed * 10,
        k1 = -5 - speed / 3;
      // Bounce off the walls.
      if (x < 0 || x > width) spermatozoon.vx *= -1;
      if (y < 0 || y > height) spermatozoon.vy *= -1;
/*      // Swim!
      for (var j = 0; ++j < m;) {
        var vx = x - path[j][0],
          vy = y - path[j][1],
          k2 = Math.sin(((spermatozoon.count += count) + j * 3) / 300) / speed;
        path[j][0] = (x += dx / speed * k1) - dy * k2;
        path[j][1] = (y += dy / speed * k1) + dx * k2;
        speed = Math.sqrt((dx = vx) * dx + (dy = vy) * dy);
      }*/
    }
    head.attr("transform", headTransform);
    tail.attr("d", tailPath);
  });
  function headTransform(d) {
    return "translate(" + d.path[0] + ")rotate(" + Math.atan2(d.vy, d.vx) * degrees + ")";
  }
  function tailPath(d) {
    return "M" + d.join("L");
  }
}
