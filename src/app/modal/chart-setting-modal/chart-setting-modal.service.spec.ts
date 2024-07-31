import { TestBed } from '@angular/core/testing';

import { ChartSettingModalService } from './chart-setting-modal.service';

describe('ChartSettingModalService', () => {
  let service: ChartSettingModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartSettingModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
