import * as actionTypes from '@app/store/actionTypes/authActionTypes';
import {LoginPayLoad} from '@app/core/types';

export const login = (payload : LoginPayLoad ) => ({
  type: actionTypes.LOGIN_DATA,
  payload: payload
});