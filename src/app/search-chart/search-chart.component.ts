import { Component, AfterViewInit, Input } from '@angular/core';
// import {TopClientsComponent} from '../top-clients/top-clients.component';

@Component({
  selector: 'search-chart',
  templateUrl: './search-chart.component.html',
  styleUrls: ['./search-chart.component.css']
})
export class SearchChartComponent {
  constructor() {
  }

  public line_ChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];

  public line_ChartOptions = {
    title: 'Search Requests',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };

  public pie_ChartData = [
    ['System', 'count'],
    ['ATG', 12016],
    ['GC', 11123],
    ['Coherence', 14713]];

  public pie_ChartOptions = {
    title: 'Properties',
    width: 500,
    height: 400
  };


}
