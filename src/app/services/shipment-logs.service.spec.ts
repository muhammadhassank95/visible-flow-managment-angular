import { TestBed } from '@angular/core/testing';

import { ShipmentLogsService } from './shipment-logs.service';

describe('ShipmentLogsService', () => {
  let service: ShipmentLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
