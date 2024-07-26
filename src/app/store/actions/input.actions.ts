import {createAction, props} from '@ngrx/store';

export enum InputActions {
  saveWord = '[Input] Save Word',
  resetInput = '[Input] Reset Input',
}

export const SaveWordAction = createAction(
  InputActions.saveWord,
  props<{ word: string }>(),
);

export const ResetInputAction = createAction(InputActions.resetInput);
