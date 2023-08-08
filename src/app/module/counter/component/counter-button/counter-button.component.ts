import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {changeChannelName, decrement, increment, reset} from "../../../../store/counter/counter.actions";

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {
constructor(private store: Store) {

}
onReset(){
  this.store.dispatch(reset())
}
onIncrement(){
  this.store.dispatch(increment())
}
onDecrement(){
  this.store.dispatch(decrement())
}

  onChanelChange() {
    this.store.dispatch(changeChannelName({value:"bingo"}))
  }
}
