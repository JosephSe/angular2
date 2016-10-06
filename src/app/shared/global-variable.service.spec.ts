/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalVariableService } from './global-variable.service';

describe('Service: GlobalVariable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalVariableService]
    });
  });

  it('should ...', inject([GlobalVariableService], (service: GlobalVariableService) => {
    expect(service).toBeTruthy();
  }));
});
