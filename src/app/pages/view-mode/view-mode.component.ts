import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LineChartComponent } from '../../components/charts/line-chart/line-chart.component';
import { Store } from '@ngrx/store';
import { selectVisibleCharts } from '../../state/charts.selectors';
import { Chart } from '../../model/chart.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { StockChartComponent } from '../../components/charts/stock-chart/stock-chart.component';
import { MapChartComponent } from '../../components/charts/map-chart/map-chart.component';
import { GanttChartComponent } from '../../components/charts/gantt-chart/gantt-chart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-mode',
  standalone: true,
  imports: [
    LineChartComponent,
    StockChartComponent,
    MapChartComponent,
    GanttChartComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './view-mode.component.html',
  styleUrl: './view-mode.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewModeComponent {
  chartConfigs: Observable<readonly Chart[]>;
  constructor(private store: Store) {
    this.chartConfigs = this.store.select(selectVisibleCharts);
  }

  readonly minDate = new Date(2024, 0, 1); // set the minimum date to be Jan 01, 2024
  readonly maxDate = new Date(2024, 6, 26); // set the maximum date to be July 26, 2024

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
