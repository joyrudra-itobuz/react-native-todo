import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './screens/SignIn/SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUP from './screens/SignUp/SignUp';
import BottomTab from './Navigation/Tabs/BottomTab';
import {AnimatedBootSplash} from './screens/BootSplash/AnimatedBootSplash';
import {Platform, StatusBar} from 'react-native';

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
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <>
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}

      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}
