import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'top-tile',
  templateUrl: './top-tile.component.html',
  styleUrls: ['./top-tile.component.css']
})
export class TopTileComponent implements OnInit {
  @Input() title:string;
  @Input() count:number;
  @Input() dataType:string;
  @Input() style:string

  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    if(this.title == "Total Searches") return "fa-search";
    else if(this.title == "Total Bookings") return "fa-book";
    else if(this.title=="Total Cancellations") return "fa-undo";
    else return "fa-user";
  }
}
