import {Counter} from "../../model/counter";
import {createReducer, on} from "@ngrx/store";
import {changeChannelName, customChange, decrement, increment, reset} from "./counter.actions";
import {state} from "@angular/animations";

export const counterInitialState:Counter={
  counter: 0,
  channelName:"alfa"
}
export const counterReducer=createReducer(counterInitialState,on(increment,(state)=>{
  return {
    ...state,
    counter:state.counter+1
  }
}),
  on(decrement,(state)=>{
    return {...state,counter:state.counter-1}
  }),
  on(reset,state=>{
    return {...state,counter:0}
  }),
  on(customChange,(state,{value})=>{

    return {...state,counter:state.counter+value}
  }),
  on(changeChannelName,(state,{value})=>{
    return {
      ...state,
      channelName: value
    };
  })
  )
