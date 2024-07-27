export type ChartType = 'line' | 'candlestick' | 'map' | 'gantt';

export interface ChartOption {
  name: string;
  value: ChartType;
}

export const chartOptions: ChartOption[] = [
  { name: 'LINE_CHART', value: 'line' },
  { name: 'STOCK_CHART', value: 'candlestick' },
  { name: 'MAP_CHART', value: 'map' },
  { name: 'GANTT_CHART', value: 'gantt' },
];

export const options = {
  chartOptions,
};
