import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopTilesComponent } from './top-tiles/top-tiles.component';
import { TopTileComponent } from './top-tiles/top-tile/top-tile.component';
import { SearchChartComponent } from './search-chart/search-chart.component';
import { TopClientsComponent } from './top-clients/top-clients.component';
import { ChartDirective } from './shared/chart.directive';
import { GoogleChartDirective } from './shared/google-chart.directive';
import { TopNavComponent } from './top-nav/top-nav.component';

/* new added */
import { PropertyContractComponent } from './entity-details/property-contract.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './entity-details/property.component';
import { OfferComponent } from './entity-details/offer.component';
import { RatePlanComponent } from './entity-details/rate-plan.component';
import { AdjustmentsComponent } from './entity-details/adjustments.component';
import { MarkupComponent } from './entity-details/markup.component';
import { InventoryUsageComponent } from './entity-details/inventory-usage.component';
import { InventoryRestrictionsComponent } from './entity-details/inventory-restrictions.component';
import { ProdDashboard2RoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    InventoryUsageComponent,
    InventoryRestrictionsComponent,
    AdjustmentsComponent,
    MarkupComponent,
    RatePlanComponent,
    PropertyContractComponent,
    PropertyComponent,/*new*/
    AppComponent,
    TopTilesComponent,
    TopTileComponent,
    SearchChartComponent,
    TopClientsComponent,
    ChartDirective,
    GoogleChartDirective,
    TopNavComponent

  ],
  imports : [
    BrowserModule,
    HttpModule,
    ProdDashboard2RoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
