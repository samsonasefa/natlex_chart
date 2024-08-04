import { Component, Input, SimpleChanges } from '@angular/core';
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
  chartOptions!: Highcharts.Options;

  @Input() startDate?: Date | null;
  @Input() endDate?: Date | null;

  updateFromInput: boolean = false;

  constructor(public dataService: DataService) {}

  xAxisMonths = [
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
  ];

  maxTempData = [-8.26, -5.0, 1.05, 4.08, 15.4, 21.06, 21.46];

  minTempData = [-14.63, -9.56, -4.4, -2.81, 6.86, 14.41, 15.75];

  ngOnInit() {
    this.chartOptions = {
      title: { text: 'Highcharts chart' },
      xAxis: [
        {
          title: { text: 'Months of 2024' },
          categories: this.xAxisMonths,
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
          data: this.maxTempData,
        },
        {
          type: 'line',
          color: 'red',
          name: 'Min temp',
          data: this.minTempData,
        },
      ],
    };
  }

  // when the input startDate and endDate get changed, update chart data will be triggered
  ngOnChanges(changes: SimpleChanges): void {
    const startDateChanges = changes?.['startDate'] ?? true;
    const endDateChanges = changes?.['endDate'] ?? true;

    if (startDateChanges && endDateChanges) {
      const startMonth = this.startDate?.getMonth();
      const endMonth = this.endDate?.getMonth();

      this.updateFromInput = !this.updateFromInput;

      if (this.chartOptions) {
        this.chartOptions.series = [
          {
            type: 'line',
            name: `Max temp ${this.xAxisMonths[startMonth ?? 0]} - ${
              this.xAxisMonths[endMonth ?? 0]
            }`,
            data: this.maxTempData.slice(startMonth, endMonth),
          },
          {
            type: 'line',
            color: 'red',
            name: `Min temp ${this.xAxisMonths[startMonth ?? 0]} - ${
              this.xAxisMonths[endMonth ?? 0]
            }`,
            data: this.minTempData.slice(startMonth, endMonth),
          },
        ];

        this.chartOptions.xAxis = [
          {
            title: {
              text: `${this.xAxisMonths[startMonth ?? 0]} - ${
                this.xAxisMonths[endMonth ?? 0]
              }`,
            },
            categories: this.xAxisMonths.slice(startMonth, endMonth),
          },
        ];
      }
    }
  }
}
