import { ChartType } from '../constants/options';

export interface Chart {
  id: string;
  title: string;
  subtitle?: string;
  type: ChartType;
  hide?: boolean;
  // there are a lot more props, and they will added down the road
}