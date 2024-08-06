import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chart } from '../model/chart.model';

/**
 * Selects the charts state from the store.
 */
export const selectCharts =
  createFeatureSelector<ReadonlyArray<Chart>>('charts');

export const selectVisibleCharts = createSelector(selectCharts, (charts) => {
  return charts.filter((chart) => !chart.hide);
});
