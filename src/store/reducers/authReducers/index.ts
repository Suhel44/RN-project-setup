import * as actionTypes from '@app/store/actionTypes/authActionTypes';
import {updateObject} from '@app/core/helper';
import { AnyAction } from 'redux'


const initialState = {
  counter: 0,
}

export const AuthReducers = (state = initialState, action : AnyAction) => {
  switch (action.type) {
    case actionTypes.LOGIN_DATA:
      console.log("Reducer data",action);
      return updateObject(state, {
        counter: state.counter+1
      });
    case actionTypes.LOGIN_DATA_SUCCESS:
      console.log("Reducer sucess",action);
      return updateObject(state, {
        counter: state.counter+1
      })
    default:
      return state;
  }
}