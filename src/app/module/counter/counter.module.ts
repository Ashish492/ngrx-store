import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterComponent} from "./component/counter/counter.component";
import {CounterOutputComponent} from "./component/counter-output/counter-output.component";
import {CounterButtonComponent} from "./component/counter-button/counter-button.component";
import {CustomCounterInputComponent} from "./component/custom-counter-input/custom-counter-input.component";
import {FormsModule} from "@angular/forms";
import {CounterRoutingModule} from "./counter.routing";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "../../store/counter/counter.reducers";




@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
   CounterRoutingModule,
    StoreModule.forFeature('counter',counterReducer)
  ]
})
export class CounterModule { }
