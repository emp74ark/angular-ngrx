import {createReducer, on} from '@ngrx/store';
import {DecreaseAction, IncreaseAction, ResetAction} from '../actions/counter.actions';

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(IncreaseAction, (state) => {
    return {...state, counter: state.counter + 1};
  }),
  on(DecreaseAction, (state) => {
    return {...state, counter: state.counter - 1};
  }),
  on(ResetAction, (state) => {
    return initialState;
  }),
);
