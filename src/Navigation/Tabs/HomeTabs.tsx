import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Completed from '../../screens/Completed/Completed';
import Important from '../../screens/Important/Important';
import AllNotes from '../../screens/AllNotes/AllNotes';

export default function HomeTabs() {
  const Stack = createNativeStackNavigator();
  const commonOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllNotes"
        options={commonOptions}
        component={AllNotes}
      />
      <Stack.Screen
        name="Completed"
        options={commonOptions}
        component={Completed}
      />
      <Stack.Screen
        name="Important"
        options={commonOptions}
        component={Important}
      />
    </Stack.Navigator>
  );
}
