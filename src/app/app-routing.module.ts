import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyContractComponent } from './entity-details/property-contract.component';

import { PropertyComponent } from './entity-details/property.component';
import { OfferComponent } from './entity-details/offer.component';
import { RatePlanComponent } from './entity-details/rate-plan.component';
import { AdjustmentsComponent } from './entity-details/adjustments.component';
import { MarkupComponent } from './entity-details/markup.component';
import { InventoryUsageComponent } from './entity-details/inventory-usage.component';
import { InventoryRestrictionsComponent } from './entity-details/inventory-restrictions.component';
import { SearchChartComponent } from './search-chart/search-chart.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}, {
  path: '',
  component: SearchChartComponent
}, 
{
  path: 'property-contract',
  component: PropertyContractComponent
},
{
  path: 'property',
  component: PropertyComponent
},
{
  path: 'rate-plan',
  component: RatePlanComponent
},
{
  path: 'adjustments',
  component: AdjustmentsComponent
},
{
  path: 'markup',
  component: MarkupComponent
},
{
  path: 'inventory-restrictions',
  component: InventoryRestrictionsComponent
},
{
  path: 'inventory-usage',
  component: InventoryUsageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProdDashboard2RoutingModule { }
