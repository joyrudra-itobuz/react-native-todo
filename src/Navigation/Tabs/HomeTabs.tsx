import React from 'react';
import Completed from '../../screens/Completed/Completed';
import Important from '../../screens/Important/Important';
import AllNotes from '../../screens/AllNotes/AllNotes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function HomeTabs() {
  const Tab = createMaterialTopTabNavigator();

  const commonOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllNotes"
        // options={commonOptions}
        component={AllNotes}
      />
      <Tab.Screen
        name="Completed"
        // options={commonOptions}
        component={Completed}
      />
      <Tab.Screen
        name="Important"
        // options={commonOptions}
        component={Important}
      />
    </Tab.Navigator>
  );
}
