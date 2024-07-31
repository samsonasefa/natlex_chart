import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';

import IndicatorsCore from 'highcharts/indicators/indicators';
import IndicatorZigzag from 'highcharts/indicators/zigzag';
import { DataService } from './data.service';
IndicatorsCore(Highcharts);
IndicatorZigzag(Highcharts);

@Component({
  selector: 'app-stock-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './stock-chart.component.html',
  styleUrl: './stock-chart.component.scss',
})
export class StockChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options;

  constructor(public dataService: DataService) {
    this.chartOptions = {
      title: { text: 'chart' },
      xAxis: {
        type: 'datetime',
        min: Date.UTC(2024, 0, 1),
        max: Date.UTC(2024, 6, 25),
      },
      series: [
        {
          type: 'candlestick',
          pointInterval: 24 * 3600 * 1000,
          data: this.dataService.getData(),
        },
      ],
    };
  }
}
