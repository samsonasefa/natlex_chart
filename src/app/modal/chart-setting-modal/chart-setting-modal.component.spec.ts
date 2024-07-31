import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSettingModalComponent } from './chart-setting-modal.component';

describe('ChartSettingModalComponent', () => {
  let component: ChartSettingModalComponent;
  let fixture: ComponentFixture<ChartSettingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartSettingModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
