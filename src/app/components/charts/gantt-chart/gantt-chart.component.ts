import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highcharts-gantt';

@Component({
  selector: 'app-gantt-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './gantt-chart.component.html',
  styleUrl: './gantt-chart.component.scss',
})
export class GanttChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  today = new Date();
  day = 1000 * 60 * 60 * 24;

  // Set to 00:00:00:000 today
  // today.setUTCHours(0);
  // today.setUTCMinutes(0);
  // today.setUTCSeconds(0);
  // today.setUTCMilliseconds(0);

  chartOptions: Highcharts.Options = {
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
      min: this.today.getTime() - 2 * this.day,
      max: this.today.getTime() + 32 * this.day,
    },
    accessibility: {
      keyboardNavigation: {
        seriesNavigation: {
          mode: 'serialize',
        },
      },
      // point: {
      //     descriptionFormatter: function (point) {
      //         const dependency = point.dependency &&
      //                 point.series.chart.get(point.dependency).name,
      //             dependsOn = dependency ?
      //                 ' Depends on ' + dependency + '.' : '';

      //         return Highcharts.format(
      //             '{point.yCategory}. Start {point.x:%Y-%m-%d}, end ' +
      //             '{point.x2:%Y-%m-%d}.{dependsOn}',
      //             { point, dependsOn }
      //         );
      //     }
      // }
    },
    series: [
      {
        type: 'gantt',
        name: 'Project 1',
        data: [
          {
            name: 'Planning',
            id: 'planning',
            start: this.today.getTime(),
            end: this.today.getTime() + 20 * this.day,
          },
          {
            name: 'Requirements',
            id: 'requirements',
            parent: 'planning',
            start: this.today.getTime(),
            end: this.today.getTime() + 5 * this.day,
          },
          {
            name: 'Design',
            id: 'design',
            dependency: 'requirements',
            parent: 'planning',
            start: this.today.getTime() + 3 * this.day,
            end: this.today.getTime() + 20 * this.day,
          },
          {
            name: 'Layout',
            id: 'layout',
            parent: 'design',
            start: this.today.getTime() + 3 * this.day,
            end: this.today.getTime() + 10 * this.day,
          },
          {
            name: 'Graphics',
            parent: 'design',
            dependency: 'layout',
            start: this.today.getTime() + 10 * this.day,
            end: this.today.getTime() + 20 * this.day,
          },
          {
            name: 'Develop',
            id: 'develop',
            start: this.today.getTime() + 5 * this.day,
            end: this.today.getTime() + 30 * this.day,
          },
          {
            name: 'Create unit tests',
            id: 'unit_tests',
            dependency: 'requirements',
            parent: 'develop',
            start: this.today.getTime() + 5 * this.day,
            end: this.today.getTime() + 8 * this.day,
          },
          {
            name: 'Implement',
            id: 'implement',
            dependency: 'unit_tests',
            parent: 'develop',
            start: this.today.getTime() + 8 * this.day,
            end: this.today.getTime() + 30 * this.day,
          },
        ],
      },
    ],
    // series: [
    //   {
    //     type: 'gantt',
    //     name: 'Project 1',
    //     data: [
    //       {
    //         name: 'Start prototype',
    //         start: Date.UTC(2014, 10, 18),
    //         end: Date.UTC(2014, 10, 25),
    //         completed: 0.25,
    //       },
    //       {
    //         name: 'Test prototype',
    //         start: Date.UTC(2014, 10, 27),
    //         end: Date.UTC(2014, 10, 29),
    //       },
    //       {
    //         name: 'Develop',
    //         start: Date.UTC(2014, 10, 20),
    //         end: Date.UTC(2014, 10, 25),
    //         completed: {
    //           amount: 0.12,
    //           fill: '#fa0',
    //         },
    //       },
    //       {
    //         name: 'Run acceptance tests',
    //         start: Date.UTC(2014, 10, 23),
    //         end: Date.UTC(2014, 10, 26),
    //       },
    //     ],
    //   },
    // ],
  };
}
