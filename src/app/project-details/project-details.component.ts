import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  HNS_label;
  HNS;
  HNS2;
  HNS3;
  HNS4;

  Ler_label;
  Ler;


  RNAPol;
  RNAPol_label;
  RNA;

  resetPositions() {
    this.RNAPol.attr("transform", "translate(100,-100)");
    this.RNA.attr("transform", "translate(-100,-100)");
    this.RNAPol_label.attr("transform", "translate(-100,-100)");
    this.HNS_label.attr("transform", "translate(0,0)");
    this.HNS.attr("transform", "translate(0,0)");
    this.HNS2.attr("transform", "translate(0,0)");
    this.HNS3.attr("transform", "translate(0,0)");
    this.HNS4.attr("transform", "translate(0,0)");
    this.Ler.attr("transform", "translate(0,0)");
    this.Ler_label.attr("transform", "translate(0,0)");
  }

  runHNSAnim() {

    this.resetPositions();

    // .transition().duration(1000)
    //.style('fill', 'gold');
    //HNS.attr("")
    this.HNS_label.transition()
      .duration(2000)
      .attr("transform", "translate(10,40)")
      .transition()
      .duration(4000)
      .attr("transform", "translate(-100,-100)");
    this.HNS.transition().duration(2000).attr("transform", "translate(10,40)")
      .on("end", () => {
        this.HNS2.transition().duration(1000).attr("transform", "translate(0,40)").on("end", () => {
          this.HNS3.transition().duration(1000).attr("transform", "translate(20,40)");
          this.HNS4.transition().duration(1500).attr("transform", "translate(30,40)").on("end", () => {
            this.Ler_label.transition().duration(500).attr("transform", "translate(-20,35)");
            this.Ler.transition().duration(500).attr("transform", "translate(-20,35)").on("end", () => {
              this.Ler_label.transition().duration(1000).attr("transform", "translate(-100,-100)");
              this.Ler.transition().duration(1000).attr("transform", "translate(-100,-100)").on("end", () => {
                this.RNAPol_label.transition().duration(1000).attr("transform", "translate(-55,20)");
                this.RNAPol.transition().duration(1000).attr("transform", "translate(-80,20)").on("end", () => {
                  this.RNAPol.transition().duration(1000).attr("transform", "translate(-100,-100)");
                  this.RNAPol_label.transition().duration(1000).attr("transform", "translate(-100,-100)").on("end", () => {
                    this.resetPositions();
                    this.runLerAnim();
                  });
                });
              })
            });
          });

        });
      });

  }

  runLerAnim () {
    this.resetPositions();
    this.HNS_label.transition().duration(1000).attr("transform", "translate(-0,-70)");
    this.HNS.transition().duration(1000).attr("transform", "translate(-0,-70)");
    this.HNS2.transition().duration(1000).attr("transform", "translate(-0,-70)");
    this.HNS3.transition().duration(1000).attr("transform", "translate(0,-70)");
    this.HNS4.transition().duration(1000).attr("transform", "translate(0,-70)");


    this.Ler_label.transition()
      .duration(2000)
      .attr("transform", "translate(-20,40)")
      .transition()
      .duration(2000)
      .attr("transform", "translate(-100,-100)");
    this.Ler.transition().duration(2000).attr("transform", "translate(-20,40)").on("end", () => {
      this.RNAPol_label.transition().duration(1000).attr("transform", "translate(-55,20)");
      this.RNAPol.transition().duration(1000).attr("transform", "translate(-80,30)").on("end", () => {
        this.RNA.attr("transform", "translate(-80,40)").transition().duration(1000).attr("transform", "translate(100,40)").on("start", () => {

        });
        this.RNAPol_label.transition().duration(1000).attr("transform", "translate(100,20)");
        this.RNAPol.transition().duration(1000).attr("transform", "translate(100,30)")
          .on("end", () => {
          this.resetPositions();
          this.runHNSAnim();
        });
      });
    });

  }

  ngOnInit() {

    this.HNS_label = d3.select("#HNSLabel");
    this.HNS = d3.select("#HNS");
    this.HNS2 = d3.select("#HNS2");
    this.HNS3 = d3.select("#HNS3");
    this.HNS4 = d3.select("#HNS4");

    this.Ler_label = d3.select("#LerLabel");
    this.Ler = d3.select("#Ler");


    this.RNAPol = d3.select("#RNA_Pol");
    this.RNAPol_label = d3.select("#RNAPolLabel");
    this.RNA = d3.select("#RNA");

     this.runLerAnim();
    //this.runHNSAnim();




    /*
    HNS_label.transition()
      .duration(4000)
      .attr("transform", "translate(-100,-100)")
      .transition()
      .duration(2000)
      .attr("transform", "translate(-0,-0)");
      */

  }




}
