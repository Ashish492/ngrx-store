import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectChannelName, selectCounter} from "../../../../store/counter/counter.selectors";
import {AppState} from "../../../../store/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<number>;
  channelName$!: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(selectCounter)

    this.channelName$=this.store.select(selectChannelName)
  }
}
