/* eslint-disable @typescript-eslint/no-unused-vars */
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import * as NavConst from '@app//navigation/navigation.const';
import APP_CONST from '@app//core/app.const';
import SplashScreen from 'react-native-splash-screen';
import {getPreference} from '@app//core/preferences';

import LoginScreen from '@app//screens/public/login/login.screen';
import SignUpScreen from '@app//screens/public/signup/signup.screen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  const [initialRoute, setInitialRoute] = useState<string>();

  useEffect(onLoad, []);

  function onLoad() {
    getPreference(APP_CONST.USER_CREDENTIALS)
      .then(value => {
        if (value) {
          setInitialRoute(NavConst.SIGNUP_SCREEN);
        } else {
          setInitialRoute(NavConst.LOGIN_SCREEN);
        }
        SplashScreen.hide();
      })
      .catch(() => {
        SplashScreen.hide();
        setInitialRoute(NavConst.LOGIN_SCREEN);
      });
  }

  return (
    <>
      {initialRoute && (
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={NavConst.LOGIN_SCREEN} component={LoginScreen} />
          {/* <Stack.Screen
            name={NavConst.SIGNUP_SCREEN}
            component={SignUpScreen}
          /> */}
        </Stack.Navigator>
      )}
    </>
  );
};
