import { Component, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from './entity-services/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'property',
  templateUrl: '../../app/entity-details/entity-templates/property.component.html',
  styleUrls: ['../../app/entity-details/entity-templates/entity-template.css'],
  providers: [DataService]
})
export class PropertyComponent {

  constructor(
    private location: Location, private _dataService: DataService
  ) {
    _dataService.getPropertyData().subscribe(summary => this.loadPropertyData(summary));
  }
  goBack(): void {
    this.location.back();
  }

  public bar_ChartOptions = {
    title: 'Property Types',
    isStacked: true,
    hAxis: {
      title: 'Property',
      minValue: 0,
      textStyle: {
        bold: true,
        fontSize: 12,
        color: '#4d4d4d'
      },
      titleTextStyle: {
        bold: true,
        fontSize: 18,
        color: '#4d4d4d'
      }
    },
    vAxis: {
      title: 'Type',
      textStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      },
      titleTextStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      }
    },
    bars: 'horizontal'
  };

  public propertyByTypes = [];
  public propertyByCategories = [];
  public propertyByProvTypes = [];

  public bar_ChartOptions_property_type;
  public bar_ChartOptions_property_categories;
  public bar_ChartOptions_property_prov_types;

  loadPropertyData(data) {
    console.log("into loadPropertyData");
    this.loadPropertyDetailsChartOptions();

    this.loadPropTypeData(data[0]);
    this.loadPropertyByCategory(data[1]);
    this.loadPropertyByProvType(data[2]);

  }

  loadPropertyDetailsChartOptions() {
    this.loadChartOptionsForPropType();
    this.loadChartOptionsForPropCategory();
    this.loadChartOptionsForPropProvision();
  }

  // methods for loading chart data attribute
  loadPropTypeData(data) {
    console.log(data);
    var bar_ChartData_prop_type = [
      ['Property Type', 'ATG', 'GC'],
      ['HOTEL', data.atgproperties.HOTEL, data.gcproperties.HOTEL],
      ['APARTMENT', data.atgproperties.APARTMENT, data.gcproperties.APARTMENT],
    ];
    this.propertyByTypes = bar_ChartData_prop_type;

  }

  loadPropertyByCategory(data) {
    console.log(data);
    var bar_ChartData_prop_category = [
      ['Property Category', 'ATG', 'GC'],
      ['SUPERIOR DELUXE',  data.atgproperties["SUPERIOR DELUXE"], data.gcproperties["SUPERIOR DELUXE"]],
      ['TOURIST CLASS',  data.atgproperties["TOURIST CLASS"], data.gcproperties["TOURIST CLASS"]],
      ['DELUXE',  data.atgproperties["DELUXE"], data.gcproperties["DELUXE"]],
      ['FIRST CLASS',  data.atgproperties["FIRST CLASS"], data.gcproperties["FIRST CLASS"]],
      ['SUPERIOR TOURIST',  data.atgproperties["SUPERIOR TOURIST"], data.gcproperties["SUPERIOR TOURIST"]],
      ['SUPERIOR FIRST', data.atgproperties["SUPERIOR FIRST"], data.gcproperties["SUPERIOR FIRST"]]
    ];
    this.propertyByCategories = bar_ChartData_prop_category;

  }

  loadPropertyByProvType(data) {
    console.log(data);
    var bar_ChartData_prov_type = [
      ['Property Provision Type', 'ATG', 'GC'],
      ['PARKING', data.atgproperties.PARKING, data.gcproperties.PARKING],
      ['SHUTTLE', data.atgproperties.SHUTTLE, data.gcproperties.SHUTTLE]
    ];
    this.propertyByProvTypes = bar_ChartData_prov_type;


  }

  // methods for loading chart options attribute
  loadChartOptionsForPropType() {
    this.bar_ChartOptions_property_type = JSON.parse(JSON.stringify(this.bar_ChartOptions));
    // this.bar_ChartOptions_property_type.title = "Number of property having different proprty type";
    this.bar_ChartOptions_property_type.vAxis.title = "Type";
    this.bar_ChartOptions_property_type.hAxis.title = "Properties";
    this.bar_ChartOptions_property_type.height = 250;
  }

  loadChartOptionsForPropCategory() {
    this.bar_ChartOptions_property_categories = JSON.parse(JSON.stringify(this.bar_ChartOptions));
    // this.bar_ChartOptions_property_categories.title = "Number of property having different categories";
    this.bar_ChartOptions_property_categories.vAxis.title = "Category";
    this.bar_ChartOptions_property_categories.hAxis.title = "Properties";
    this.bar_ChartOptions_property_categories.height = 500;
  }

  loadChartOptionsForPropProvision() {
    this.bar_ChartOptions_property_prov_types = JSON.parse(JSON.stringify(this.bar_ChartOptions));
    // this.bar_ChartOptions_property_prov_types.title = "Properties belonging to different provisions";
    this.bar_ChartOptions_property_prov_types.vAxis.title = "Provison Type";
    this.bar_ChartOptions_property_prov_types.hAxis.title = "Properties";
      this.bar_ChartOptions_property_type.height = 250;
  }


}
