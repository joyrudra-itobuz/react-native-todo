import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './screens/SignIn/SignIn';

export default function Navigator() {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
}
