import { createReducer, on } from '@ngrx/store';
import { ChartsActions } from './charts.actions';
import { Chart } from '../model/chart.model';

/**
 * Initial state for the charts feature.
 * Ideally, this should be loaded from session storage store.
 */
export const initialState: ReadonlyArray<Chart> = [];

export const chartsReducer = createReducer(
  initialState,
  // Add Chart action handler
  on(ChartsActions.addChart, (_state, { chart }) => {
    // console.log('chat adding chart', chart);
    if (_state.some((ch) => ch?.id === chart?.id)) {
      return _state; // Don't add duplicate charts
    }
    return [..._state, chart];
  }),
  // Edit Chart action handler
  on(ChartsActions.editChart, (_state, { chart }) => {
    // console.log('chart edit triggered ', chart);
    // Update the existing chart with the provided data
    return _state.map((oldChart) =>
      oldChart.id === chart.id ? { ...oldChart, ...chart } : oldChart
    );
  }),
  // Hide Chart action handler
  on(ChartsActions.hideChart, (_state, { id, hide }) => {
    // console.log('chart id ',id, ' is about to hide', hide);
    // Update the 'hide' property of the chart with the matching ID
    return _state.map((chart) =>
      chart.id === id ? { ...chart, hide } : chart
    );
  }),
  // Remove Chart action handler
  on(ChartsActions.removeChart, (_state, { id }) => {
    // console.log('chart removing chart id', id);
    // Filter out the chart with the matching ID
    return _state.filter((ch) => ch.id !== id);
  }),
  // Reset Chart action handler (needs implementation)
  on(ChartsActions.resetChart, (_state) => {
    // TODO: Implement logic to load charts from session storage or a persistent store
    console.log('Resetting chart - Implement loading from session storage');
    return []; // For now, reset to an empty array
  })
);
