import {View} from 'react-native';
import React from 'react';
import SignInUpLayout from './src/components/global/Layouts/SignInUpLayout';
import bgStyles from './src/styles/bgStyles';
import SignInForm from './src/components/SignIn/Form/SignInForm';
import layoutStyles from './src/styles/layoutStyles';
import spacingStyles from './src/styles/spacingStyles';

export default function App() {
  return (
    <View style={[bgStyles.bgDark]}>
      <SignInUpLayout>
        <View
          style={[layoutStyles.widthFull, bgStyles.bgBlack, spacingStyles.p20]}>
          <SignInForm />
        </View>
      </SignInUpLayout>
    </View>
  );
}
