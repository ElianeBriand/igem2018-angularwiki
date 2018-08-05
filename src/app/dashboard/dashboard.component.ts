import {Component, AfterContentInit, HostListener} from '@angular/core';
import { timer} from 'rxjs';
import {
  loadLiquidFillGauge,
  liquidFillGaugeDefaultSettings,
  liquidFillGaugeConfig,
  GaugeUpdater,
  gradientFlow,
  makeBimodal, animateBacteria
} from './d3_anim_mainpage';
import {start_inventory_animation} from './d3_anim_mainpage';

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


    //start_inventory_animation();
    //instantiateForceFlow('#d3inputforceflow');
    gradientFlow('#d3target');
    animateBacteria("#bacteriacontainer")

    const defaultConfig: liquidFillGaugeConfig = liquidFillGaugeDefaultSettings();

    defaultConfig.valueCountUp = true;
    defaultConfig.circleThickness = 0.15;
    defaultConfig.circleColor = '#808015';
    defaultConfig.textColor = '#555500';
    defaultConfig.waveTextColor = '#FFFFAA';
    defaultConfig.waveColor = '#AAAA39';
    defaultConfig.textVertPosition = 0.8;
    defaultConfig.waveAnimateTime = 1000;
    defaultConfig.waveHeight = 0.05;
    defaultConfig.waveAnimate = true;
    defaultConfig.waveRise = false;
    defaultConfig.waveHeightScaling = false;
    defaultConfig.waveOffset = 0.25;
    defaultConfig.textSize = 0.50;
    defaultConfig.waveCount = 3;
    defaultConfig.displayPercent = true;
    defaultConfig.minValue = 0;
    defaultConfig.maxValue = 600;
    defaultConfig.customPercent = ' nmol/L';

    const gauge: GaugeUpdater = loadLiquidFillGauge('#d3inputgauge', 220, defaultConfig);
    const source = timer(1500, 1500);
    source.subscribe(val => gauge.update(Math.floor(Math.random() * 100) + 250 ));


    const defaultConfig2: liquidFillGaugeConfig = liquidFillGaugeDefaultSettings();

    defaultConfig2.valueCountUp = true;
    defaultConfig2.circleThickness = 0.15;
    defaultConfig2.circleColor = '#80357c';
    defaultConfig2.textColor = '#555500';
    defaultConfig2.waveTextColor = '#FFFFAA';
    defaultConfig2.waveColor = '#AAAA39';
    defaultConfig2.textVertPosition = 0.8;
    defaultConfig2.waveAnimateTime = 1000;
    defaultConfig2.waveHeight = 0.05;
    defaultConfig2.waveAnimate = true;
    defaultConfig2.waveRise = false;
    defaultConfig2.waveHeightScaling = false;
    defaultConfig2.waveOffset = 0.25;
    defaultConfig2.textSize = 0.50;
    defaultConfig2.waveCount = 3;
    defaultConfig2.displayPercent = true;
    defaultConfig2.minValue = 0;
    defaultConfig2.maxValue = 600;
    defaultConfig2.customPercent = ' nmol/L';

    const gauge2: GaugeUpdater = loadLiquidFillGauge('#d3outgauge', 45, defaultConfig2);
    const source2 = timer(1500, 1500);
    source2.subscribe(val => gauge2.update(Math.floor(Math.random() * 40) + 50 ));

    makeBimodal('#d3bimodal');
  }





}
