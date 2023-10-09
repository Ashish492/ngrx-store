import {createAction, props} from "@ngrx/store";

export const increment=createAction('[counter]increment');
export const decrement=createAction('[counter]decrement');
export const reset=createAction('[counter]reset');
export const customChange=createAction('[counter]custom',props<{value:number}>());
export const changeChannelName=createAction('[counter]changeChannel',props<{value:string}>());

