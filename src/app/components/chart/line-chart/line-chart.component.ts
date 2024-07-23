import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  data = [1, 2, 2.25, 3.5, 5.75, 6, 7];

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data,
      },
    ],
  };
}
