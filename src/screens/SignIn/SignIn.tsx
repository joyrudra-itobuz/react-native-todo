import {View} from 'react-native';
import React from 'react';
import SignInUpLayout from '../../components/global/Layouts/SignInUpLayout';
import SignInForm from '../../components/SignIn/Form/SignInForm';
import bgStyles from '../../styles/bgStyles';
import layoutStyles from '../../styles/layoutStyles';
import spacingStyles from '../../styles/spacingStyles';

export default function SignIn() {
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
