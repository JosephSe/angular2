import { Component, AfterViewInit, Input } from '@angular/core';
import { DashboardService } from '../shared/dashboard.service';
import { GlobalVariableService } from "../shared/global-variable.service";
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

  public propertyLoaded = false;

  constructor(private _dashboardService: DashboardService, private router: Router, private globalVar: GlobalVariableService) {
    var data = globalVar.getDashboardCountData();
    if(data) {
      this.loadPieChartData(data);
    } else {  
      _dashboardService.getPieChartData().subscribe(summary => this.loadPieChartData(summary));
    }
  }

  chartLoaded(chartType) {
    if(chartType == 'property') {
      this.propertyLoaded = true
    // } else if(chartType == 'byProvision') {
      // this.byProvisionLoaded = true;
    }
  }

  public booking_ChartOptions = {
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
  public chartData_Offer = [];
  public chartData_RoomRate = [];
  public chartData_RateRule = [];

  private loadPieChartData(data) {
    this.globalVar.setDashboardCountData(data);
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

    var pie_chart_data_Offer = [
      ['System', 'count'],
      ['ATG', data[2].systems.ATG],
      ['GC', data[2].systems.GC],
      ['Coherence', data[2].systems.Coherence]
    ];

    var pie_chart_data_RatePlan = [
      ['System', 'count'],
      ['ATG', data[3].systems.ATG],
      ['GC', data[3].systems.GC],
      ['Coherence', data[3].systems.Coherence]
    ];

    var pie_chart_data_Adjustment = [
      ['System', 'count'],
      ['GC', data[4].systems.GC],
      ['Coherence', data[4].systems.Coherence]
    ];

    var pie_chart_data_Markup = [
      ['System', 'count'],
      ['GC', data[5].systems.GC],
      ['Coherence', data[5].systems.Coherence]
    ];

    var pie_chart_data_InventoryRestrictions = [
      ['System', 'count'],
      ['GC', data[6].systems.GC],
      ['Coherence', data[6].systems.Coherence]
    ];

    var pie_chart_data_InventoryUsage = [
      ['System', 'count'],
      ['GC', data[7].systems.GC],
      ['Coherence', data[7].systems.Coherence]
    ];

    var pie_chart_data_RoomRate = [
      ['System', 'count'],
      ['GC', data[8].systems.GC],
      ['Coherence', data[8].systems.Coherence]
    ];

/*    var pie_chart_data_RateRule = [
      ['System', 'Static', 'Margin'],
      ['GC', data[9].systems.GC, data[10].systems.GC],
      ['Coherence', data[9].systems.Coherence, data[10].systems.Coherence]
    ];
*/
    this.chartData_Property = pie_chart_data_Property;
    this.chartData_PropertyContract = pie_chart_data_PropertyContract;
    this.chartData_RatePlan = pie_chart_data_RatePlan;
    this.chartData_Adjustment = pie_chart_data_Adjustment;
    this.chartData_Markup = pie_chart_data_Markup;
    this.chartData_InventoryRestrictions = pie_chart_data_InventoryRestrictions;
    this.chartData_InventoryUsage = pie_chart_data_InventoryUsage;
    this.chartData_Offer = pie_chart_data_Offer;
    this.chartData_RoomRate = pie_chart_data_RoomRate;
    // this.chartData_RateRule = pie_chart_data_RateRule;

  }
  getPropertyDetails(): void {
     this.router.navigateByUrl('/property');
  }

  getPropertyContractDetails(): void {
    this.router.navigateByUrl('/property-contract');
  }

  getOfferDetails(): void {
    this.router.navigateByUrl('/offer');
  }

  getRatePlanDetails(): void {
    // this.router.navigateByUrl('/rate-plan');
  }

  getMarkupDetails(): void {
    // this.router.navigateByUrl('/markup');
  }

  getAdjustmentsDetails(): void {
    // this.router.navigateByUrl('/adjustments');
  }

  getInventoryRestrictionsDetails(): void {
    // this.router.navigateByUrl('/inventory-restrictions');
  }

  getInventoryUsageDetails(): void {
    // this.router.navigateByUrl('/inventory-usage');
  }


  getRoomRateDetails(): void {
    // this.router.navigateByUrl('/room-rate');
  }

  getRateRuleDetails(): void {
    // this.router.navigateByUrl('/rate-rule');
  }
}
