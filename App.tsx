/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import PoppinsText from './components/global/text/Poppins';
import SignInSignUpLayout from './components/layouts/signInSignUpLayout/SignInSignUpLayout';

export default function App() {
  return (
    <View>
      <PoppinsText
        style={{
          color: '#000000',
        }}>
        Okay SO?
      </PoppinsText>
      <Text
        style={{
          color: '#000000',
        }}>
        Okay SO?
      </Text>
      <SignInSignUpLayout />
    </View>
  );
}
