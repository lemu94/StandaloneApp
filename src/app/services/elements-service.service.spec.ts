import { TestBed } from '@angular/core/testing';

import { ElementsServiceService } from './elements-service.service';

describe('ElementsServiceService', () => {
  let service: ElementsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
