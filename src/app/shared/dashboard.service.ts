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

  constructor(private _http:Http) { }

}
