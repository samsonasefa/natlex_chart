export type ChartType = 'line' | 'candlestick' | 'map' | 'gantt';

export interface ChartOption {
  name: string;
  value: ChartType;
}

export const chartOptions: ChartOption[] = [
  { name: 'Line chart', value: 'line' },
  { name: 'Stock chart', value: 'candlestick' },
  { name: 'Map chart', value: 'map' },
  { name: 'Gantt chart', value: 'gantt' },
];

export const options = {
  chartOptions,
};
