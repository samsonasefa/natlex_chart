import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ChartSettingForm,
  ChartSettingModalComponent,
} from './chart-setting-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ChartSettingModalService {
  constructor(private dialog: MatDialog) {}

  open(data?: any) {
    console.log('the incomming chart data is', data);
    return this.dialog
      .open<ChartSettingModalComponent, any, ChartSettingForm>(
        ChartSettingModalComponent,
        {
          hasBackdrop: true,
          width: '75vw',
          maxWidth: '70rem',
          panelClass: 'mobile-modal',
          data,
        }
      )
      .afterClosed();
  }
}
