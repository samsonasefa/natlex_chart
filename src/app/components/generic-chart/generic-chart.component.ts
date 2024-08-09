import { Component, Input, SimpleChanges } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as HighchartsStock from 'highcharts/highstock';
import * as Highcharts from 'highcharts';

import * as HighchartsMap from 'highcharts/highmaps';
import * as HighchartsGantt from 'highcharts/highcharts-gantt';
import worldMap from '@highcharts/map-collection/custom/world.topo.json';

import IndicatorsCore from 'highcharts/indicators/indicators';
IndicatorsCore(HighchartsStock);

import { DataService } from './data.service';

@Component({
  selector: 'app-generic-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './generic-chart.component.html',
  styleUrl: './generic-chart.component.scss',
})
export class GenericChartComponent {
  @Input() chartOptions: Highcharts.Options = {};
  @Input() chartType!: string;

  updateFlag = false;

  @Input() startDate?: Date;
  @Input() endDate?: Date;

  Highcharts!:
    | typeof Highcharts
    | typeof HighchartsStock
    | typeof HighchartsMap
    | typeof HighchartsGantt;
  chartConstructor!: string;

  constructor(public dataService: DataService) {}

  ngOnInit() {}

  // when the input startDate and endDate get changed, update chart data will be triggered
  ngOnChanges(changes: SimpleChanges): void {
    const startDateChanges = changes?.['startDate'] ?? true;
    const endDateChanges = changes?.['endDate'] ?? true;

    if (startDateChanges && endDateChanges) {
      this.updateFlag = true;
    }

    switch (this.chartType) {
      case 'candlestick':
        this.Highcharts = HighchartsStock;
        this.chartConstructor = 'stockChart';
        this.chartOptions = this.defaultStockChartOptions(
          this.startDate,
          this.endDate
        );
        break;
      case 'map':
        this.Highcharts = HighchartsMap;
        this.chartConstructor = 'mapChart';
        this.chartOptions = this.defaultMapChartOptions();
        break;
      case 'gantt':
        this.Highcharts = HighchartsGantt;
        this.chartConstructor = 'ganttChart';
        this.chartOptions = this.defaultGanttChartOptions();
        break;
      default:
        this.Highcharts = Highcharts;
        this.chartConstructor = 'chart';
        this.chartOptions = this.defaultLineChartOptions(
          this.startDate,
          this.endDate
        );
        break;
    }
  }

  private defaultLineChartOptions(
    startDate?: Date,
    endDate?: Date
  ): Highcharts.Options {
    return {
      title: { text: 'Highcharts chart' },
      xAxis: [
        {
          title: { text: 'Months of 2024' },
          categories: this.dataService.getMonthList(startDate, endDate),
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
          data: this.dataService.getMaxTempData(startDate, endDate),
        },
        {
          type: 'line',
          color: 'red',
          name: 'Min temp',
          data: this.dataService.getMinTempData(startDate, endDate),
        },
      ],
    };
  }

  private defaultStockChartOptions(
    startDate?: Date,
    endDate?: Date
  ): Highcharts.Options {
    return {
      title: { text: 'Candlestick chart' },
      xAxis: {
        type: 'datetime',
        min: startDate ? startDate.getTime() : Date.UTC(2024, 0, 1),
        max: endDate ? endDate.getTime() : Date.UTC(2024, 6, 25),
      },
      series: [
        {
          type: 'candlestick',
          pointInterval: 24 * 3600 * 1000,
          data: this.dataService.getStockChartData(),
        },
      ],
    };
  }

  private defaultGanttChartOptions(): Highcharts.Options {
    const today = new Date();
    const day = 1000 * 60 * 60 * 24;
    return {
      lang: {
        accessibility: {
          axis: {
            xAxisDescriptionPlural:
              'The chart has a two-part X axis ' +
              'showing time in both week numbers and days.',
          },
        },
      },

      title: {
        text: 'Gantt Chart with Progress Indicators',
      },
      xAxis: {
        min: today.getTime() - 2 * day,
        max: today.getTime() + 32 * day,
      },
      accessibility: {
        keyboardNavigation: {
          seriesNavigation: {
            mode: 'serialize',
          },
        },
      },
      series: [
        {
          type: 'gantt',
          name: 'Project 1',
          data: [
            {
              name: 'Planning',
              id: 'planning',
              start: today.getTime(),
              end: today.getTime() + 20 * day,
            },
            {
              name: 'Requirements',
              id: 'requirements',
              parent: 'planning',
              start: today.getTime(),
              end: today.getTime() + 5 * day,
            },
            {
              name: 'Design',
              id: 'design',
              dependency: 'requirements',
              parent: 'planning',
              start: today.getTime() + 3 * day,
              end: today.getTime() + 20 * day,
            },
            {
              name: 'Layout',
              id: 'layout',
              parent: 'design',
              start: today.getTime() + 3 * day,
              end: today.getTime() + 10 * day,
            },
            {
              name: 'Graphics',
              parent: 'design',
              dependency: 'layout',
              start: today.getTime() + 10 * day,
              end: today.getTime() + 20 * day,
            },
            {
              name: 'Develop',
              id: 'develop',
              start: today.getTime() + 5 * day,
              end: today.getTime() + 30 * day,
            },
            {
              name: 'Create unit tests',
              id: 'unit_tests',
              dependency: 'requirements',
              parent: 'develop',
              start: today.getTime() + 5 * day,
              end: today.getTime() + 8 * day,
            },
            {
              name: 'Implement',
              id: 'implement',
              dependency: 'unit_tests',
              parent: 'develop',
              start: today.getTime() + 8 * day,
              end: today.getTime() + 30 * day,
            },
          ],
        },
      ],
    };
  }

  private defaultMapChartOptions(): Highcharts.Options {
    return {
      chart: {
        map: worldMap,
      },
      title: {
        text: 'Highcharts Maps - basic demo',
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: 'spacingBox',
        },
      },
      legend: {
        enabled: true,
      },
      colorAxis: {
        min: 0,
      },
      series: [
        {
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55',
            },
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
          },
          allAreas: false,
          data: this.dataService.getMapData(),
        } as Highcharts.SeriesMapOptions,
        {
          // Specify points using lat/lon
          type: 'mappoint',
          name: 'Canada cities',
          marker: {
            radius: 5,
            fillColor: 'tomato',
          },
        },
      ],
    };
  }
}
