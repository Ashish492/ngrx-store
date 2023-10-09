import {AppState} from "../app.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Counter} from "../../model/counter";

const counterSelector=createFeatureSelector<Counter>('counter')
export const selectCounter=createSelector(counterSelector,(state)=>state.counter)
export  const selectChannelName=createSelector(counterSelector,(state)=>state.channelName)





