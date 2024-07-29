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
import { ChartsActions } from '../../state/charts.actions';
import { ChartType } from '../../constants/options';

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
  ChartSamples = ['line', 'candlestick', 'map', 'gantt'];
  pointer = 0;
  removedChart = [];

  constructor(private store: Store) {
    this.chartConfigs = this.store.select(selectCharts);
  }

  /**
   * A function to trigger add chart
   */
  onAdd(): void {
    // todo open add modal
    // on return submit
    // in the future it will open a modal

    if (this.pointer >= this.ChartSamples.length) {
      // dont add new chart object if it reach its max
      return;
    }
    this.store.dispatch(
      ChartsActions.addChart({
        chart: {
          id: this.ChartSamples[this.pointer],
          title: `${this.ChartSamples[this.pointer]} chart`,
          type: this.ChartSamples[this.pointer] as ChartType,
          hide: false,
        },
      })
    );
    // move pointer to next
    this.pointer = this.pointer + 1;
  }

  /**
   * A function responsible to Hide/unHide charts
   * @param id chart id
   * @param hide should be visible
   */
  changeVisibility(id: string, hide: boolean): void {
    this.store.dispatch(ChartsActions.hideChart({ id, hide }));
  }

  /**
   * A function to trigger edit chart
   */
  onEdit(): void {
    // open edit modal
    // on return submit / save
  }

  /**
   * A function to trigger delete chart
   */
  onDelete() {
    // open 'are you sure' modal
    // on return save
  }

  /**
   * A function responsible to delete chart
   * @param id chart id to be removed
   */
  Remove(id: string): void {
    this.store.dispatch(ChartsActions.removeChart({ id }));
  }

  // TODO reset to load default chart
}
