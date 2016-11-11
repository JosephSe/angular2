import { Component, Input } from '@angular/core';
import {TopTileComponent} from './top-tile/top-tile.component';
import {DashboardService} from '../shared/dashboard.service';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs/Rx';

// import {HTTP_PROVIDERS} from  '@angular/http';

@Component({
  selector: 'top-tiles',
  templateUrl: './top-tiles.component.html',
  styleUrls: ['./top-tiles.component.css'],
  providers:[DashboardService, DatePipe]
})
export class TopTilesComponent {
  @Input() topTilesData;

  constructor(private dashboardService:DashboardService, private datePipe:DatePipe) {
    var dayStr = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
   }

   loadTilesData(summary) {
     var data = [{
       text: "Total Bookings",
       value: summary.bookingSummary[0].count,
       dataType: "actual"
     }, {
         text: "Total Searches",
         value: summary.searchSummary[0].count,
         dataType: "actual"
       }, {
         text: "Top Client",
         value: summary.bookingSummary[0].topClient,
         dataType: "actual"
       }, {
         text: "Total Clients",
         value: summary.bookingSummary[0].totalClients,
         dataType: "actual"
       }, {
         text: "Total Cancellations",
         value: summary.cancellationSummary[0].count,
         dataType: "actual"
       }
     ];
     this.topTilesData = data;

   }

}
