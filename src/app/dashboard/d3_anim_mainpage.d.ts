

/*

export  function liquidFillGaugeDefaultSettings(): liquidFillGaugeConfig;
export  function loadLiquidFillGauge(d3selector: string, value: number, config: liquidFillGaugeConfig): GaugeUpdater;

export class liquidFillGaugeConfig {
  minValue: number; // The gauge minimum value.
  maxValue: number; // The gauge maximum value.
  circleThickness: number; // The outer circle thickness as a percentage of it's radius.
  circleFillGap: number; // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
  circleColor: string; // The color of the outer circle.
  waveHeight: number; // The wave height as a percentage of the radius of the wave circle.
  waveCount: number; // The number of full waves per width of the wave circle.
  waveRiseTime: number; // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
  waveAnimateTime: number; // The amount of time in milliseconds for a full wave to enter the wave circle.
  waveRise: boolean; // Control if the wave should rise from 0 to it's full height, or start at it's full height.
  waveHeightScaling: boolean; // Controls wave size scaling at low and high fill percentages.
                              // When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill.
                              // This helps to prevent the wave from making the wave circle from appear totally full or
                              // empty when near it's minimum or maximum fill.
  waveAnimate: boolean; // Controls if the wave scrolls or is static.
  waveColor: string; // The color of the fill wave.
  waveOffset: number; // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
  textVertPosition: number; // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
  textSize: number; // The relative height of the text to display in the wave circle. 1 = 50%
  valueCountUp: boolean; // If true, the displayed value counts up from 0 to it's final value upon loading.
                         // If false, the final value is displayed.
  displayPercent: boolean; // If true, a % symbol is displayed after the value.
  textColor: string; // The color of the value text when the wave does not overlap it.
  waveTextColor: string; // The color of the value text when the wave overlaps it.
  customPercent: string;
}



export class GaugeUpdater {
  constructor();
  update(value: number): void;
}

export class GraphUpdater {
  constructor();
  update(): void;
}


export function start_inventory_animation(): void;

export function gradientFlow(d3selector: string): void;

export function makeBimodal(d3selector: string): GraphUpdater;

export function animateBacteria(d3selector: string) : void;

*/
