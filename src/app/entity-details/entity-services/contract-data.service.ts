import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContractDataService {

/*  subPath = "/es/dashboard/summary/"
  getDashboardData(): Object {
    return {}
  }

  getTodaysData(dayStr) {
    var url = environment.serverURL + this.subPath + dayStr;
    return this.call(url);
  }

  getBookingSummary() {
    var url = environment.serverURL + this.subPath + "all"
    return this.call(url);
  }

  private call(url) {
    return this._http.get(url).map(res => res.json());
  }
adding new implementation for getting data for making pie chart for all the entities */
getContractData(){
   console.log("into this get data");
var dummyUrl = "app/entity-details/entity-services/dummy_data_contract.json";
var  dataUrl = "http://10.102.27.50:9000/dashboard/entity/details/propertycontract";
return this._http.get(dataUrl).map(res => res.json());
}


/*new implementation ends*/

  constructor(private _http:Http) { }

}
