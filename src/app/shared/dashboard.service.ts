import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DashboardService {

  getDashboardData(): Object {
    return {}
  }

  private call(url) {
    return this._http.get(url).map(res => res.json());
  }
/* adding new implementation for getting data for making pie chart for all the entities*/
getPieChartData(){
var dummyUrl = "app/shared/dummy_data.json";
var  dataUrl = environment.serverURL + "/dashboard/entity/count";
return this._http.get(dataUrl).map(res => res.json());
}


/*new implementation ends*/

  constructor(private _http:Http) { }

}
