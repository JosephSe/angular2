import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getDashboardData(): Object {
    return {}
  }

  getTopTilesData(): Object[] {
    return [{
      text: "Total Bookings",
      value: 25,
      dataType: "actual"
    }, {
        text: "Total Searches",
        value: 1253,
        dataType: "actual"
      }, {
        text: "Top Client",
        value: 13523,
        dataType: "actual"
      }, {
        text: "Total Clients",
        value: 4,
        dataType: "actual"
      }, {
        text: "Total Cancellations",
        value: 2,
        dataType: "simulated"
      }
    ]
  }

  constructor() { }

}
