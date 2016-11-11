import {Component, AfterViewInit, Input} from '@angular/core';
import { Location }               from '@angular/common';
@Component({
  selector: 'inventory-usage',
  template: `<h1>Inventory Usage details</h1>
  <button (click)="goBack()">Back</button>`,
  styleUrls: [],
  providers: []
})
export class InventoryUsageComponent{
  constructor(
        private location: Location
  ) {}

  goBack(): void {
     this.location.back();
   }
}
