import {View} from 'react-native';
import React from 'react';
import SignInUpLayout from './src/components/global/Layouts/SignInUpLayout';
import SoraText from './src/components/global/text/SoraText';
import textStyles from './src/styles/text';
import InterText from './src/components/global/text/InterText';
import bgStyles from './src/styles/backgrounds';

export default function App() {
  return (
    <View>
      <SignInUpLayout>
        <View style={bgStyles.bgDark}>
          <SoraText style={[textStyles.textWhite, textStyles.text40]}>
            This is Nothing!
          </SoraText>
        </View>
      </SignInUpLayout>
    </View>
  );
}
