import {Component, AfterViewInit, Input} from '@angular/core';
import { Location }               from '@angular/common';
@Component({
  selector: 'adjustments',
  template: `<h1>Adjustment details</h1>
  <button (click)="goBack()">Back</button>`,
  styleUrls: [],
  providers: []
})
export class AdjustmentsComponent{
  constructor(
        private location: Location
  ) {}

  goBack(): void {
     this.location.back();
   }
}
