import {Component, AfterViewInit, Input} from '@angular/core';
import {DashboardService} from '../shared/dashboard.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'search-chart',
  templateUrl: './search-chart.component.html',
  styleUrls: ['./search-chart.component.css'],
  providers: [DashboardService]
})
export class SearchChartComponent {
  @Input() bookingsData;
  textColor = '#73879C'

  constructor(private _dashboardService:DashboardService) {
    _dashboardService.getBookingSummary().subscribe(summary => this.updateCharts(summary));
    Observable.interval(10000).subscribe(some => _dashboardService.getBookingSummary().subscribe(summary => this.updateCharts(summary)));
  }

  private updateCharts(data) {
    var rows = [];
    var summary = data.bookingSummary;
    var chartData = [['Year', 'Bookings']];
    summary.forEach(elem => chartData.push([new Date(elem.date), elem.count]))
    this.booking_ChartData = chartData;

    chartData = [['Year', 'Searches']];
    var search = data.searchSummary;
    search.forEach(elem => chartData.push([new Date(elem.date), elem.count]))
    this.search_ChartData = chartData;

    chartData = [['Year', 'Cancellations']];
    var search = data.cancellationSummary;
    search.forEach(elem => chartData.push([new Date(elem.date), elem.count]))
    this.cancellation_ChartData = chartData;
  }

  public booking_ChartData = [];

  public booking_ChartOptions = {
    // title: 'Bookings',
    titleTextStyle: {
      color: this.textColor
    },
    legend: {
      position: 'bottom',
      textStyle: {
        color: this.textColor
      }
    },
    hAxis: {
      textStyle: {
        color: this.textColor
      }
    },
    vAxis: {
      textStyle: {
        color: this.textColor
      }
    },
    colors: ['#2A3F54']
  };

  public search_ChartData = [];

  public search_ChartOptions = {
    // title: 'Searches',
    titleTextStyle: {
      color: this.textColor
    },
    legend: {
      position: 'bottom',
      textStyle: {
        color: this.textColor
      }
    },
    hAxis: {
      textStyle: {
        color: this.textColor
      }
    },
    vAxis: {
      textStyle: {
        color: this.textColor
      }
    },
    colors: ['#1ABB9C']
  };

  public cancellation_ChartData = [];

  public cancellation_ChartOptions = {
    // title: 'Cancellations',
    titleTextStyle: {
      color: this.textColor
    },
    legend: {
      position: 'bottom',
      textStyle: {
        color: this.textColor
      }
    },
    hAxis: {
      textStyle: {
        color: this.textColor
      }
    },
    vAxis: {
      textStyle: {
        color: this.textColor
      }
    },
    colors: ['#1a8abb']
  };

  public pie_ChartData = [
    ['System', 'count'],
    ['ATG', 12016],
    ['GC', 11123],
    ['Coherence', 14713]];

  public pie_ChartOptions = {
    titleTextStyle: {
      color: this.textColor
    },
    legend: {
      position: 'bottom',
      textStyle: {
        color: this.textColor
      }
    },
    hAxis: {
      textStyle: {
        color: this.textColor
      }
    },
    vAxis: {
      textStyle: {
        color: this.textColor
      }
    }
  };

}
