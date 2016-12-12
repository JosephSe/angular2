import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'entity-summary',
  templateUrl: './entity-summary.component.html',
  styleUrls: ['./entity-summary.component.css']
})
export class EntitySummaryComponent implements OnInit {

    @Input('chartName') public chartName: string;
    @Input('chartType') public chartType: string;
    @Input('chartOptions') public chartOptions: Object;
    @Input('chartData') public chartData: Object;
    @Input('routePath') public routePath: string;

  public dataLoaded = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigationEnabled():boolean {
    return !(this.routePath == "");
  }
  navigate():void {
     this.router.navigateByUrl("/"+this.routePath);
  }

    chartLoaded(chartType) {
    if(chartType == 'data') {
      this.dataLoaded = true
    }
  }

}
