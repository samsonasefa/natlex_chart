import { Component, Input, SimpleChanges } from '@angular/core';
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
  chartOptions!: Highcharts.Options;

  updateFlag = false;

  @Input() startDate?: Date | null;
  @Input() endDate?: Date | null;

  constructor(public dataService: DataService) {}

  ngOnInit() {
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

  // when the input startDate and endDate get changed, update chart data will be triggered
  ngOnChanges(changes: SimpleChanges): void {
    const startDateChanges = changes?.['startDate'] ?? true;
    const endDateChanges = changes?.['endDate'] ?? true;

    if (startDateChanges && endDateChanges) {
      this.updateFlag = true;

      if (this.chartOptions) {
        this.chartOptions.xAxis = {
          min: this.startDate?.getTime(),
          max: this.endDate?.getTime(),
        };
      }
    }
  }
}
