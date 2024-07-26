import {createFeatureSelector} from '@ngrx/store';
import {CounterState} from '../reducers/counter.reducer';

export const selectCounterFeature = createFeatureSelector<Readonly<CounterState>>('counter')
