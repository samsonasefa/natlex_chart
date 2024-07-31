import { Component } from '@angular/core';
import { LineChartComponent } from '../../components/charts/line-chart/line-chart.component';
import { Store } from '@ngrx/store';
import { selectCharts } from '../../state/charts.selectors';
import { Chart } from '../../model/chart.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { StockChartComponent } from '../../components/charts/stock-chart/stock-chart.component';
import { MapChartComponent } from '../../components/charts/map-chart/map-chart.component';
import { GanttChartComponent } from '../../components/charts/gantt-chart/gantt-chart.component';

@Component({
  selector: 'app-view-mode',
  standalone: true,
  imports: [
    LineChartComponent,
    StockChartComponent,
    MapChartComponent,
    GanttChartComponent,
    CommonModule,
  ],
  templateUrl: './view-mode.component.html',
  styleUrl: './view-mode.component.scss',
})
export class ViewModeComponent {
  chartConfigs: Observable<readonly Chart[]>;
  constructor(private store: Store) {
    this.chartConfigs = this.store.select(selectCharts);
  }
}
