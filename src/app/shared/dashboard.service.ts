import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DashboardService {

  subPath = "/es/dashboard/summary/"
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
/* adding new implementation for getting data for making pie chart for all the entities*/
getPieChartData(){
<<<<<<< HEAD
var dummyUrl = "app/shared/dummy_data.json";
var  dataUrl = "http://10.102.27.50:9000/dashboard/entity/count";
=======

var  dataUrl = "http://10.102.27.52:9000/dashboard/system/entitycount";
>>>>>>> 1b5e6d0c5f3d475b7365886ca41b4b8152f42e3f
return this._http.get(dataUrl).map(res => res.json());
}


/*new implementation ends*/

  constructor(private _http:Http) { }

}
