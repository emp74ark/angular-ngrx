import {createReducer, on} from '@ngrx/store';
import {ResetInputAction, SaveWordAction} from '../actions/input.actions';

export interface InputState {
  word: string;
}

const initialState: InputState = {
  word: '',
};

export const inputReducer = createReducer(
  initialState,
  on(SaveWordAction, (state, action) => {
    return {...state, word: action.word};
  }),
  on(ResetInputAction, (state) => initialState),
);
