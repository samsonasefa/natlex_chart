import { Component } from '@angular/core';
import { LineChartComponent } from '../../components/chart/line-chart/line-chart.component';

@Component({
  selector: 'app-view-mode',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './view-mode.component.html',
  styleUrl: './view-mode.component.scss',
})
export class ViewModeComponent {}
