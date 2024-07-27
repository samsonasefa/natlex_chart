import { createFeatureSelector } from '@ngrx/store';
import { Chart } from '../model/chart.model';

/**
 * Selects the charts state from the store.
 */
export const selectCharts =
  createFeatureSelector<ReadonlyArray<Chart>>('charts');
