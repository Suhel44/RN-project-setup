import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppStack} from '@app/navigation/appStack';
import {AuthStack} from '@app/navigation/authStack';
import * as NavConst from '@app/navigation/navigation.const';

const Stack = createStackNavigator();

export const navigationRef = React.createRef<any>();

export const navigate = (name: string, params: any) => {
  navigationRef?.current?.navigate(name, params);
};

export const AppNavigator = (props: any) => {
  return (
    <NavigationContainer ref={props.setRef}>
      <Stack.Navigator
        initialRouteName={NavConst.AUTH_STACK}
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name={NavConst.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={NavConst.APP_STACK} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
