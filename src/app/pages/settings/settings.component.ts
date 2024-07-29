import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { Chart } from '../../model/chart.model';
import { Store } from '@ngrx/store';
import { selectCharts } from '../../state/charts.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  chartConfigs: Observable<readonly Chart[]>;

  constructor(private store: Store) {
    this.chartConfigs = this.store.select(selectCharts);
  }
}
