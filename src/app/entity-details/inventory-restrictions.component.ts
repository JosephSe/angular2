import {Component, AfterViewInit, Input} from '@angular/core';
import { Location }               from '@angular/common';
@Component({
  selector: 'inventory-restrictions',
  template: `<h1>Inventory Restrictions details</h1>
  <button (click)="goBack()">Back</button>`,
  styleUrls: [],
  providers: []
})
export class InventoryRestrictionsComponent{
  constructor(
        private location: Location
  ) {}

  goBack(): void {
     this.location.back();
   }
}
