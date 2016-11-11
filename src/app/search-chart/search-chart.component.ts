import { Component, AfterViewInit, Input } from '@angular/core';
import { DashboardService } from '../shared/dashboard.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';



@Component({
  selector: 'search-chart',
  templateUrl: './search-chart.component.html',
  styleUrls: ['./search-chart.component.css'],
  providers: [DashboardService]
})
export class SearchChartComponent {
  @Input() bookingsData;

  textColor = '#73879C'

  constructor(private _dashboardService: DashboardService, private router: Router) {
    _dashboardService.getPieChartData().subscribe(summary => this.loadPieChartData(summary));
    /** new  **/ Observable.interval(10000).subscribe(some => _dashboardService.getPieChartData().subscribe(summary => this.loadPieChartData(summary)));
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
    },
    width: 300,
    height: 200
  };


  /** to load data for pie charts **/
  public chartData_Property = [];
  public chartData_PropertyContract = [];
  public chartData_RatePlan = [];
  public chartData_Adjustment = [];
  public chartData_Markup = [];
  public chartData_InventoryRestrictions = [];
  public chartData_InventoryUsage = [];

  private loadPieChartData(data) {
    console.log(data);
    var pie_chart_data_Property = [
      ['System', 'count'],
      ['ATG', data[0].systems.ATG],
      ['GC', data[0].systems.GC],
      ['Coherence', data[0].systems.Coherence]
    ];

    var pie_chart_data_PropertyContract = [
      ['System', 'count'],
      ['ATG', data[1].systems.ATG],
      ['GC', data[1].systems.GC],
      ['Coherence', data[1].systems.Coherence]
    ];

    var pie_chart_data_RatePlan = [
      ['System', 'count'],
      ['ATG', data[2].systems.ATG],
      ['GC', data[2].systems.GC],
      ['Coherence', data[2].systems.Coherence]
    ];

    var pie_chart_data_RatePlan = [
      ['System', 'count'],
      ['ATG', data[2].systems.ATG],
      ['GC', data[2].systems.GC],
      ['Coherence', data[2].systems.Coherence]
    ];

    var pie_chart_data_Adjustment = [
      ['System', 'count'],
      ['GC', data[3].systems.GC],
      ['Coherence', data[3].systems.Coherence]
    ];

    var pie_chart_data_Markup = [
      ['System', 'count'],
      ['GC', data[4].systems.GC],
      ['Coherence', data[4].systems.Coherence]
    ];

    var pie_chart_data_InventoryRestrictions = [
      ['System', 'count'],
      ['GC', data[5].systems.GC],
      ['Coherence', data[5].systems.Coherence]
    ];

    var pie_chart_data_InventoryUsage = [
      ['System', 'count'],
      ['GC', data[6].systems.GC],
      ['Coherence', data[6].systems.Coherence]
    ];

    this.chartData_Property = pie_chart_data_Property;
    this.chartData_PropertyContract = pie_chart_data_PropertyContract;
    this.chartData_RatePlan = pie_chart_data_RatePlan;
    this.chartData_Adjustment = pie_chart_data_Adjustment;
    this.chartData_Markup = pie_chart_data_Markup;
    this.chartData_InventoryRestrictions = pie_chart_data_InventoryRestrictions;
    this.chartData_InventoryUsage = pie_chart_data_InventoryUsage;

  }
  getPropertyDetails(): void {
    console.log("into details");

    this.router.navigateByUrl('/property');
  }

  getPropertyContractDetails(): void {
    console.log("into details");

    this.router.navigateByUrl('/property-contract');
  }

  getRatePlanDetails(): void {
    console.log("into details");

    this.router.navigateByUrl('/rate-plan');
  }

  getMarkupDetails(): void {
    console.log("into details");

    this.router.navigateByUrl('/markup');
  }

  getAdjustmentsDetails(): void {
    console.log("into details");

    this.router.navigateByUrl('/adjustments');
  }

  getInventoryRestrictionsDetails(): void {
    console.log("into details");

    this.router.navigateByUrl('/inventory-restrictions');
  }

  getInventoryUsageDetails(): void {
    console.log("into details");

    this.router.navigateByUrl('/inventory-usage');
  }
}
