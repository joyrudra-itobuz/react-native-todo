import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './screens/SignIn/SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUP from './screens/SignUp/SignUp';
import BottomTab from './Navigation/Tabs/BottomTab';

function AuthNavigator() {
  const Auth = createNativeStackNavigator();
  const commonOptions = {
    headerShown: false,
  };

  return (
    <Auth.Navigator>
      <Auth.Screen name="SignIn" options={commonOptions} component={SignIn} />
      <Auth.Screen name="SignUp" options={commonOptions} component={SignUP} />
      <Auth.Screen name="App" options={commonOptions} component={BottomTab} />
    </Auth.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
