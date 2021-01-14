/* eslint-disable no-unused-vars */
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import * as actionTypes from '../constant/actionType';
import * as constant from '../constant/constant';
import request from './apiAction';

const isLogin = status => {
  return {
    type: actionTypes.IS_LOGGED,
    isLogin: status,
  };
};

const hasError = (status, error) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    isError: status,
    data: error,
  };
};

const login = user => {
  return dispatch => {
    dispatch(request.apiRequest(true));

    if (!user.username || !user.password) {
      dispatch(hasError(true));
      dispatch(request.apiRequest(false));
      return;
    }

    axios
      .post(actionTypes.API_URL$ + '/signin', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      })
      .then(response => {
        if (response.status === 200) {
          AsyncStorage.setItem(constant.TOKEN);
          dispatch(isLogin(true));
        }
      })
      .catch(error => {
        dispatch(hasError(true, error));
      });
  };
};

const logout = () => {
  AsyncStorage.removeItem(constant.TOKEN);
  return {
    type: actionTypes.LOGOUT,
  };
};

const register = user => {
  return dispatch => {
    dispatch(request.apiRequest(true));

    axios
      .post(actionTypes.API_URL + '/signup', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: user,
      })
      .then(res => {
        if (res.status === 201) {
          dispatch(request.apiRequest(false));
          AsyncStorage.setItem(constant.MOBILE_NO, res.phone);
          this.props.navigation.navigate('VerifyNumber');
        }
      })
      .catch(error => {
        dispatch(hasError(true, error));
      });
  };
};

export const userActions = {
  login,
  logout,
  register,
};
