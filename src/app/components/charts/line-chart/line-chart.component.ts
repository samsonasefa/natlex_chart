import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from './data.service';
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
  chartOptions: Highcharts.Options;

  constructor(public dataService: DataService) {
    this.chartOptions = {
      title: { text: 'Highcharts chart' },
      xAxis: [
        {
          title: { text: 'Months of 2024' },
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        },
      ],
      yAxis: [
        {
          title: { text: 'Temp in C' },
        },
      ],
      series: [
        {
          type: 'line',
          name: 'Max temp',
          data: [-8.26, -5.0, 1.05, 4.08, 15.4, 21.06, 21.46],
        },
        {
          type: 'line',
          color: 'red',
          name: 'Min temp',
          data: [-14.63, -9.56, -4.4, -2.81, 6.86, 14.41, 15.75],
        },
      ],
    };
  }
}
