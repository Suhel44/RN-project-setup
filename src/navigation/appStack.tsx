import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as NavConst from '@app/navigation/navigation.const';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      {/* After login screens will comes here */}
    </Stack.Navigator>
  );
};
//Application drawer
export function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={NavConst.DRAWER} component={AppStack} />
    </Drawer.Navigator>
  );
}
