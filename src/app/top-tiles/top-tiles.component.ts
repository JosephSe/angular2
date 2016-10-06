import { Component } from '@angular/core';
import {TopTileComponent} from './top-tile/top-tile.component';
import {DashboardService} from "../shared/dashboard.service";

@Component({
  selector: 'top-tiles',
  templateUrl: './top-tiles.component.html',
  styleUrls: ['./top-tiles.component.css'],
  providers:[DashboardService]
})
export class TopTilesComponent {

  topTilesData;

  constructor(dashboardService:DashboardService) {
      this.topTilesData = dashboardService.getTopTilesData();
   }

}
