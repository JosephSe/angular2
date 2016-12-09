import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {

  private googleLoaded: boolean;
  private registeredCharts;
  private dashboardCountData:any;
  private propertyData:any;
  private propertyContractData:any;
  private offerData:any;

  getGoogleChartStatus():boolean {
    return this.googleLoaded;
  }
  setGoogleChartStatus(status) {
    this.googleLoaded = status;
  }
  getDashboardCountData():any {
    return this.dashboardCountData;
  }
  setDashboardCountData(data) {
    this.dashboardCountData = data;
  }

  getPropertyData():any {
    return this.propertyData;
  }
  setPropertyData(data) {
    this.propertyData = data;
  }
  getPropertyContractData():any {
    return this.propertyContractData;
  }
  setPropertyContractData(data) {
    this.propertyContractData = data;
  }
  getOfferData():any {
    return this.offerData;
  }
  setOfferData(data) {
    this.offerData = data;
  }
  constructor() {
    this.googleLoaded=false;
  }

}
