import React from 'react';
import Completed from '../../screens/Completed/Completed';
import Important from '../../screens/Important/Important';
import AllNotes from '../../screens/AllNotes/AllNotes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function HomeTabs() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="AllNotes" component={AllNotes} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Important" component={Important} />
    </Tab.Navigator>
  );
}
