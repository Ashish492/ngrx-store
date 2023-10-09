import {Counter} from "../model/counter";
import {counterInitialState, counterReducer} from "./counter/counter.reducers";

export interface AppState{
  counter:Counter
}

