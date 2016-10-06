//import { Directive } from '@angular/core';
import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {GlobalVariableService} from "./global-variable.service";

declare var google: any;
@Directive({
  selector: '[GoogleChart]',
  providers:[GlobalVariableService]
})

export class GoogleChartDirective implements OnInit {
  public _element: any;
  @Input('chartType') public chartType: string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  constructor(public element: ElementRef, private globalVar:GlobalVariableService) {
    this._element = this.element.nativeElement;
  }
  ngOnInit() {
    console.log("google load check")
    if (!this.globalVar.googleLoaded) {
      console.log("google load check")
      this.globalVar.googleLoaded = true;
      google.charts.load('current', { 'packages': ['corechart', 'gauge'] });
    } else {
      console.log("google load check")

    }
    setTimeout(() => this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element), 1000);
  }
  drawGraph(chartOptions, chartType, chartData, ele) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var wrapper;
      wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable: chartData,
        options: chartOptions || {},
        containerId: ele.id
      });
      wrapper.draw();
    }
  }
}
