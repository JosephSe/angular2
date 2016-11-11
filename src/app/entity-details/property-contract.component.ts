import {Component, AfterViewInit, Input} from '@angular/core';
import { Location }               from '@angular/common';
import { ContractDataService } from './entity-services/contract-data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'property-contract',
  templateUrl: '../../app/entity-details/entity-templates/property-contract.component.html',
  styleUrls: [],
  providers: [ ContractDataService  ]
})
export class PropertyContractComponent{

  constructor(
        private location: Location , private _contractDataService : ContractDataService
  ) {      _contractDataService.getContractData().subscribe(summary => this.loadPropertyContractData(summary));
  /**new**/  Observable.interval(10000).subscribe(some => _contractDataService.getContractData().subscribe(summary => this.loadPropertyContractData(summary)));
}
  goBack(): void {
     this.location.back();
   }

   public bar_ChartOptions= {
                title :'Property Contract Status',
                chartArea: {width: '50%'},
                hAxis: {
                 title: 'Contracts',
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
                  title: 'Status',
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
                }
              };

              /*   public bar_ChartOptions_contract_having_currency= {
                              title :'Top 5 currency with number of Property Contracts having them',
                              chartArea: {width: '50%'},
                              hAxis: {
                               title: 'Contracts',
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
                                title: 'Currency',
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
                              }
                            };*/



public contractStatus =[];
public contractByCurrency =[];
public contractByModel =[];

public bar_ChartOptions_contract_status;
  public bar_ChartOptions_contract_having_currency ;
  public bar_ChartOptions_contract_having_model ;

   loadPropertyContractData(data){
console.log("into loadPropertyContractData");
this.loadContractChartOptions();

this.loadContractStatusData(data[0]);
this.loadContractByCurrency(data[1]);
this.loadContractByModel(data[2]);

 }

loadContractChartOptions(){

this.loadChartOptionsForStatus();
this.loadChartOptionsForCurrency();
this.loadChartOptionsForModel();

}

// methods for loading chart data attribute
loadContractStatusData(data){
  console.log(data);
  var bar_ChartData_status = [
                ['Status', 'Coherence', 'ATG' , 'GC'],
                ['LIVE', data.cohproperties.LIVE, data.atgproperties.LIVE, data.gcproperties.LIVE],
                ['SUSPENDED', data.cohproperties.SUSPENDED, data.atgproperties.SUSPENDED,data.gcproperties.SUSPENDED],
                ['PENDING', data.cohproperties.PENDING, data.atgproperties.PENDING,data.gcproperties.SUSPENDED],
                ['CANCELLED', data.cohproperties.CANCELLED, data.atgproperties.CANCELLED, data.gcproperties.CANCELLED]
              ];
          this.contractStatus = bar_ChartData_status;

}

loadContractByCurrency(data){
    console.log(data);
 var bar_ChartData_currency = [
              ['Language', 'Coherence', 'ATG' , 'GC'],
              ['EUR', data.cohproperties.EUR, data.atgproperties.EUR, data.gcproperties.EUR],
              ['GBP', data.cohproperties.GBP, data.atgproperties.GBP,data.gcproperties.GBP],
              ['USD', data.cohproperties.USD, data.atgproperties.USD,data.gcproperties.USD],
              ['JPY', data.cohproperties.JPY, data.atgproperties.JPY, data.gcproperties.JPY],
                ['THB', data.cohproperties.THB, data.atgproperties.THB, data.gcproperties.THB],
                  ['OTHERS', data.cohproperties.OTHERS, data.atgproperties.OTHERS, data.gcproperties.OTHERS]
            ];
        this.contractByCurrency = bar_ChartData_currency;

      }

      loadContractByModel(data){
          console.log(data);
       var bar_ChartData_model = [
                    ['Model', 'Coherence', 'ATG' , 'GC'],
                    ['MARGIN', data.cohproperties.MARGIN, data.atgproperties.MARGIN, data.gcproperties.MARGIN],
                    ['STATIC', data.cohproperties.STATIC, data.atgproperties.STATIC,data.gcproperties.STATIC]

                  ];
              this.contractByModel = bar_ChartData_model;


            }

// methods for loading chart options attribute
loadChartOptionsForStatus(){
  this.bar_ChartOptions_contract_status = JSON.parse(JSON.stringify(this.bar_ChartOptions));
  this.bar_ChartOptions_contract_status.title ="Number of property contracts having different status";
  this.bar_ChartOptions_contract_status.vAxis.title = "Status";
  this.bar_ChartOptions_contract_status.hAxis.title = "Contracts";
}

loadChartOptionsForCurrency(){

     this.bar_ChartOptions_contract_having_currency = JSON.parse(JSON.stringify(this.bar_ChartOptions));
     this.bar_ChartOptions_contract_having_currency.title ="Top 5 currency with number of Property Contracts having them";
     this.bar_ChartOptions_contract_having_currency.vAxis.title = "Currency";
     this.bar_ChartOptions_contract_having_currency.hAxis.title = "Contracts";
}

loadChartOptionsForModel(){

     this.bar_ChartOptions_contract_having_model = JSON.parse(JSON.stringify(this.bar_ChartOptions));
     this.bar_ChartOptions_contract_having_model.title ="Contracts belonging to different models";
     this.bar_ChartOptions_contract_having_model.vAxis.title = "Model";
     this.bar_ChartOptions_contract_having_model.hAxis.title = "Contracts";
}

  }
