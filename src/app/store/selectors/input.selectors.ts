import {createFeatureSelector} from '@ngrx/store';
import {InputState} from '../reducers/input.reducer';

export const selectInputFeature = createFeatureSelector<Readonly<InputState>>('input');
