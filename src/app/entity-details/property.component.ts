import {Component, AfterViewInit, Input} from '@angular/core';
import { Location }               from '@angular/common';

@Component({
  selector: 'property',
  template: `<h1> PROPERTY details</h1>
  <button (click)="goBack()">Back</button>`,
  styleUrls: [],
  providers: []
})
export class PropertyComponent{
  constructor(
        private location: Location
  ) {}

  goBack(): void {
     this.location.back();
   }
}
