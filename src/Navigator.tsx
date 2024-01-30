import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './screens/SignIn/SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUP from './screens/SignUp/SignUp';
import Home from './screens/Home/Home';

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  const commonOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          options={commonOptions}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          options={commonOptions}
          component={SignUP}
        />
        <Stack.Screen name="Home" options={commonOptions} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
