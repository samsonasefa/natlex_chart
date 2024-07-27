import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from '../../components/chart/line-chart/line-chart.component';
import { Store } from '@ngrx/store';
import { selectCharts } from '../../state/charts.selectors';
import { Chart } from '../../model/chart.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChartsActions } from '../../state/charts.actions';
import { ChartType } from '../../constants/options';

@Component({
  selector: 'app-view-mode',
  standalone: true,
  imports: [LineChartComponent, CommonModule],
  templateUrl: './view-mode.component.html',
  styleUrl: './view-mode.component.scss',
})
export class ViewModeComponent {
  chartConfigs: Observable<readonly Chart[]>;
  ChartSamples = ['line', 'candlestick', 'map', 'gantt'];
  pointer = 0;
  removedChart = [];

  constructor(private store: Store) {
    this.chartConfigs = this.store.select(selectCharts);
  }

  /**
   * dummy function to add a new chart
   */
  Add(): void {
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
   * dummy function to reset the chart list
   */
  Reset(): void {
    this.store.dispatch(ChartsActions.resetChart({}));
    // reset pointer
    this.pointer = 0;
  }

  /**
   * dummy function to Hide/unHide chart
   * @param id chart id
   * @param hide should be visible
   */
  Hide(id: string, hide: boolean): void {
    this.store.dispatch(ChartsActions.hideChart({ id, hide }));
  }

  /**
   * dummy function to remove chart
   * @param id chart id to be removed
   */
  Remove(id: string): void {
    this.store.dispatch(ChartsActions.removeChart({ id }));
  }
}
