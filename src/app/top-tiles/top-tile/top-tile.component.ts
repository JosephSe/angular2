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
  constructor() { }

  ngOnInit() {
  }

}
