import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUP} />
    </Tab.Navigator>
  );
}
