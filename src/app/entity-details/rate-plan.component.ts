import {Component, AfterViewInit, Input} from '@angular/core';
import { Location }               from '@angular/common';

@Component({
  selector: 'rate-plan',
  template: `<h1> Rate plan details</h1>
  <button (click)="goBack()">Back</button>`,
  styleUrls: [],
  providers: []
})
export class RatePlanComponent{
  constructor(
        private location: Location
  ) {}

  goBack(): void {
     this.location.back();
   }
}
