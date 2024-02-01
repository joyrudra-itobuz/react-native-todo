import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './screens/SignIn/SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUP from './screens/SignUp/SignUp';
import BottomTab from './Navigation/Tabs/BottomTab';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthNavigator() {
  const Auth = createNativeStackNavigator();
  const commonOptions = {
    headerShown: false,
  };

  return (
    <Auth.Navigator>
      <Auth.Screen name="SignIn" options={commonOptions} component={SignIn} />
      <Auth.Screen name="SignUp" options={commonOptions} component={SignUP} />
    </Auth.Navigator>
  );
}

export default function Navigator() {
  const [hasToken, setHasToken] = React.useState<boolean | null>(null);

  useEffect(() => {
    async function checkToken() {
      const token = await AsyncStorage.getItem('accessToken');

      if (token) {
        setHasToken(true);
      }
    }

    checkToken();
  }, []);

  return (
    <NavigationContainer>
      {hasToken ? <BottomTab /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
