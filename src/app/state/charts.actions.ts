import { createActionGroup, props } from '@ngrx/store';
import { Chart } from '../model/chart.model';

export const ChartsActions = createActionGroup({
  source: 'Charts',
  events: {
    /**
     * Adds a new chart to the store.
     */
    'Add Chart': props<{ chart: Chart }>(),
    /**
     * Edits an existing chart in the store.
     */
    'Edit Chart': props<{ chart: Chart }>(),
    /**
     * Hides or shows a chart.
     * @param id The ID of the chart to hide/show.
     * @param hide Whether to hide the chart.
     */
    'Hide Chart': props<{ id: string; hide: boolean }>(),
    /**
     * Removes a chart from the store.
     */
    'Remove Chart': props<{ id: string }>(),
    /**
     * Resets or restore the chart state to default state.
     */
    'Reset Chart': props<{ chart?: Chart }>(),
  },
});
