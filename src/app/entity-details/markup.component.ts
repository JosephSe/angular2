import {Component, AfterViewInit, Input} from '@angular/core';
import { Location }               from '@angular/common';
@Component({
  selector: 'markup',
  template: `<h1> Markup details</h1>
  <button (click)="goBack()">Back</button>`,
  styleUrls: [],
  providers: []
})
export class MarkupComponent{
  constructor(
        private location: Location
  ) {}

  goBack(): void {
     this.location.back();
   }
}
