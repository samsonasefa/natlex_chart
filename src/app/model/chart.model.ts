import { ChartType } from '../constants/options';

export interface Chart {
  id: string;
  title: string;
  subtitle?: string;
  type: ChartType;
  hide?: boolean;
  description?: string;
  color?: string;
  chartFamilyType?: string;
  // there are a lot more props, and they will added down the road
}
