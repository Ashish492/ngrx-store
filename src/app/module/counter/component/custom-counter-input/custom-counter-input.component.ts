import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {customChange} from "../../../../store/counter/counter.actions";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {
  value=0;

constructor(private store:Store) {
}
onClick(){
  this.store.dispatch(customChange({value:this.value}))
}
}
