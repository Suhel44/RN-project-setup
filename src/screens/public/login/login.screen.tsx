/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import * as actions from '@app/store/actions/authActions/loginAction';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../signup/signup.style';

const Login = () => {
  const dispatch = useDispatch();
  useEffect(onload, []);
  function onload() {
    const payload = {
      userName: 'Nagu',
      password: 'V',
    };
    dispatch(actions.login(payload));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to City Moves</Text>
    </View>
  );
};

export default Login;
