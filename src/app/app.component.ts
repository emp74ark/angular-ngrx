import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectCounterFeature} from './store/selectors/counter.selectors';
import {CounterState} from './store/reducers/counter.reducer';
import {AsyncPipe} from '@angular/common';
import {
  DecreaseAction,
  IncreaseAction,
  ResetAction,
} from './store/actions/counter.actions';
import {InputState} from './store/reducers/input.reducer';
import {selectInputFeature} from './store/selectors/input.selectors';
import {ResetInputAction, SaveWordAction} from './store/actions/input.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter$: Observable<CounterState>;
  input$: Observable<InputState>;

  constructor(
    private store: Store,
  ) {
    this.counter$ = store.select<CounterState>(selectCounterFeature);
    this.input$ = store.select<InputState>(selectInputFeature);
  }

  onIncrease() {
    this.store.dispatch(IncreaseAction());
  }

  onDecrease() {
    this.store.dispatch(DecreaseAction());
  }

  onReset() {
    this.store.dispatch(ResetAction());
  }

  onSaveText(value: string) {
    this.store.dispatch(SaveWordAction({word: value}));
  }

  onResetText() {
    this.store.dispatch(ResetInputAction());
  }
}
