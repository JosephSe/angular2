import { Component, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from './entity-services/data.service';
import { Observable } from 'rxjs/Rx';
import { GlobalVariableService } from "../shared/global-variable.service";

@Component({
  selector: 'offer',
  templateUrl: '../../app/entity-details/entity-templates/offer.component.html',
  styleUrls: ['../../app/entity-details/entity-templates/entity-template.css'],
  providers: [DataService]
})
export class OfferComponent {

  public byStatusLoaded = false;
  public byStayLoaded = false;
  public byCodeLoaded = false;

  constructor(private location: Location, private _dataService: DataService, private globalVar: GlobalVariableService) {
    var data = globalVar.getOfferData();
    if (data) {
      this.loadOfferData(data);
    } else {
      _dataService.getOfferData().subscribe(summary => this.loadOfferData(summary));
    }
  }
  goBack(): void {
    this.location.back();
  }

  chartLoaded(chartType) {
    if (chartType == 'byStatus') {
      this.byStatusLoaded = true
    } else if (chartType == 'byStay') {
      this.byStayLoaded = true;
    } else if (chartType == 'byCode') {
      this.byCodeLoaded = true;
    }
  }


  public bar_ChartOptions = {
  };

  public offerByStatus = [];
  public offerByStayType = [];
  public offerByOfferCode = [];

  public bar_ChartOptions_offer_status;
  public bar_ChartOptions_offer_staytype;
  public bar_ChartOptions_offer_code;

  loadOfferData(data) {
    this.globalVar.setOfferData(data);
    this.loadOfferDetailsChartOptions();

    this.loadOfferCodeData(data[0]);
    this.loadOfferStatusData(data[1]);
    this.loadOfferStayTypeData(data[2]);
  }

  loadOfferDetailsChartOptions() {
    this.loadChartOptionsForOfferCode();
    this.loadChartOptionsForOfferStatus();
    this.loadChartOptionsForOfferStayType();
  }

  // methods for loading chart data attribute
  loadOfferCodeData(data) {
    var bar_ChartData_offer_code = [
      ['Offer Code', 'Coherence', 'ATG', 'GC'],
      ['EARLY_BIRD', data.cohproperties.EARLY_BIRD, data.atgproperties.EARLY_BIRD, data.gcproperties.EARLY_BIRD],
      ['LAST_MINUTE', data.cohproperties.LAST_MINUTE, data.atgproperties.LAST_MINUTE, data.gcproperties.LAST_MINUTE],
      ['FREE_NIGHT', data.cohproperties.FREE_NIGHT, data.atgproperties.FREE_NIGHT, data.gcproperties.FREE_NIGHT],
      ['MIN_NIGHTS', data.cohproperties.MIN_NIGHTS, data.atgproperties.MIN_NIGHTS, data.gcproperties.MIN_NIGHTS],
    ];
    this.offerByOfferCode = bar_ChartData_offer_code;

  }

  loadOfferStatusData(data) {
    console.log(data);
    var bar_ChartData_offer_status = [
      ['Offer By Status', 'Coherence', 'ATG', 'GC'],
      ['ACTIVE', data.cohproperties.ACTIVE, data.atgproperties.ACTIVE, data.gcproperties.ACTIVE],
      ['INACTIVE', data.cohproperties.INACTIVE, data.atgproperties.INACTIVE, data.gcproperties.INACTIVE],
    ];
    this.offerByStatus = bar_ChartData_offer_status;
  }

  loadOfferStayTypeData(data) {
    console.log(data);
    var bar_ChartData_offer_stay_type = [
      ['Offer By Stay Type', 'Coherence', 'ATG', 'GC'],
      ['INCLUSIVE', data.cohproperties.INCLUSIVE, data.atgproperties.INCLUSIVE, data.gcproperties.INCLUSIVE],
      ['ARRIVAL_DAY', data.cohproperties.ARRIVAL_DAY, data.atgproperties.ARRIVAL_DAY, data.gcproperties.ARRIVAL_DAY],
    ];
    this.offerByStayType = bar_ChartData_offer_stay_type;
  }

  // methods for loading chart options attribute
  loadChartOptionsForOfferStatus() {
    this.bar_ChartOptions_offer_status = this.bar_ChartOptions;
  }

  loadChartOptionsForOfferStayType() {
    this.bar_ChartOptions_offer_staytype = this.bar_ChartOptions;
  }

  loadChartOptionsForOfferCode() {
    this.bar_ChartOptions_offer_code = this.bar_ChartOptions;
  }
}
