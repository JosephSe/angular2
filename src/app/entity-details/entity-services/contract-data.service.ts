import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContractDataService {

getContractData(){
   console.log("into this get data");
var dummyUrl = "app/entity-details/entity-services/dummy_data_contract.json";
var  dataUrl = environment.serverURL + "/dashboard/entity/details/propertycontract";
return this._http.get(dataUrl).map(res => res.json());
}


/*new implementation ends*/

  constructor(private _http:Http) { }

}
