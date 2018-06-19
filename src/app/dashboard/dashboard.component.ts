import {Component, AfterContentInit, HostListener} from '@angular/core';
import * as d3 from 'd3';
import {Observable, timer} from 'rxjs';
import * as anim_mp from './d3_anim_mainpage';
import gauge from './d3_anim_mainpage';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterContentInit {



  private atimer;

  dyn_width = 500;

  ngAfterContentInit() {
    this.dyn_width = document.getElementById('d3container').clientWidth;
     this.drawFigure('#d3target', this.dyn_width);
    const a = new gauge();
    a.loadLiquidFillGauge('d3target', 55, a.liquidFillGaugeDefaultSettings());
  }



  drawFigure(elementStringSelector: string, dyn_width: number) {
/*

    let n: number = 20 ; // number of layers
    let m: number = 200; // number of samples per layer
    let k: number= 10; // number of bumps per layer

    let stack = d3.stack().keys(d3.range(n)).offset(d3.stackOffsetWiggle);
    let layers0 = stack(d3.transpose(d3.range(n).map(function() { return bumps(m, k); })));
    let layers1 = stack(d3.transpose(d3.range(n).map(function() { return bumps(m, k); })));
    let layers = layers0.concat(layers1);

    let svg = d3.select(elementStringSelector);
    let width = dyn_width;
    let height = 500;

    let x = d3.scaleLinear()
      .domain([0, m - 1])
      .range([0, width]);

    let y = d3.scaleLinear()
      .domain([d3.min(layers, stackMin), d3.max(layers, stackMax)])
      .range([height, 0]);

    let z = d3.interpolateCool;

    let area = d3.area()
      .x(function(d, i) { return x(i); })
      .y0(function(d) { return y(d[0]); })
      .y1(function(d) { return y(d[1]); });

    svg.selectAll("path")
      .data(layers0)
      .enter().append("path")
      .attr("d", area)
      .attr("fill", function() { return z(Math.random()); });

    function stackMax(layer) {
      return d3.max(layer, function(d) { return d[1]; });
    }

    function stackMin(layer) {
      return d3.min(layer, function(d) { return d[0]; });
    }

    function transition() {
      var t;
      d3.selectAll("path")
        .data((t = layers1, layers1 = layers0, layers0 = t))
        .transition()
        .duration(2500)
        .attr("d", area);
    }

    // Inspired by Lee Byron’s test data generator.
    function bumps(n, m) {
      var a = [], i;
      for (i = 0; i < n; ++i) a[i] = 0;
      for (i = 0; i < m; ++i) bump(a, n);
      return a;
    }

    function bump(a, n) {
      var x = 1 / (0.1 + Math.random()),
        y = 2 * Math.random() - 0.5,
        z = 10 / (0.1 + Math.random());
      for (var i = 0; i < n; i++) {
        var w = (i / n - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    }
*/

  }



}
