import {createAction} from '@ngrx/store';

enum CounterActions {
  increase = '[Counter] increase',
  decrease = '[Counter] decrease',
  reset = '[Counter] reset',
}

export const IncreaseAction = createAction(CounterActions.increase);
export const DecreaseAction = createAction(CounterActions.decrease);
export const ResetAction = createAction(CounterActions.reset);
