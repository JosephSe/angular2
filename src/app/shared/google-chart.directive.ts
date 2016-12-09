//import { Directive } from '@angular/core';
import { Directive, ElementRef, Input, Output, OnInit, OnChanges, SimpleChange, EventEmitter } from '@angular/core';
import { GlobalVariableService } from "./global-variable.service";

declare var google: any;
@Directive({
    selector: '[GoogleChart]',
    providers: []
})

export class GoogleChartDirective implements OnInit, OnChanges {
    public _element: any;
    @Input('chartType') public chartType: string;
    @Input('chartOptions') public chartOptions: Object;
    @Input('chartData') public chartData: Object;
    @Output() loaded = new EventEmitter();

    changeLog: string[] = [];

    private chartsArray = [];

    constructor(public element: ElementRef, private globalVar: GlobalVariableService) {
        this._element = this.element.nativeElement;
    }
    ngOnInit() {
        if (!this.globalVar.getGoogleChartStatus()) {
            console.log("google chart check : Loading")
            this.globalVar.setGoogleChartStatus(true);
            // this.globalVar.registeredCharts = []
            google.charts.load('current', { 'packages': ['corechart', 'bar'] });
        } else {
        }
        setTimeout(() => this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element, this.loaded), 1000);
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (let propName in changes) {
            if (propName == 'chartData') {
                // this.redrawGraph();
            }
        }
    }

    drawGraph(chartOptions, chartType, chartData, ele, loaded) {
        if (chartData.length > 0) {
            google.charts.setOnLoadCallback(drawChart);
        } else {
            this.loaded.emit(true);
        }
        function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {},
                containerId: ele.id
            });
            // globalVar.registeredCharts[ele.id] = wrapper;
            wrapper.draw();
            loaded.emit(true);
        }
    }

    redrawGraph() {
        /*
        var chart = this.globalVar.registeredCharts[this._element.id];
        if(chart) 
            chart.draw(this.chartData, this.chartOptions);
            */
        this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element, this.globalVar)
    }
}
