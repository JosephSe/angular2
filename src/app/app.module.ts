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

@NgModule({
  declarations: [
    AppComponent,
    TopTilesComponent,
    TopTileComponent,
    SearchChartComponent,
    TopClientsComponent,
    ChartDirective,
    GoogleChartDirective,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
