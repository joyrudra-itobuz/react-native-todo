import {View} from 'react-native';
import React from 'react';
import SignInUpLayout from './src/components/global/Layouts/SignInUpLayout';
import SoraText from './src/components/global/text/SoraText';
import textStyles from './src/styles/text';
import InterText from './src/components/global/text/InterText';

export default function App() {
  return (
    <View>
      <SignInUpLayout>
        <View>
          <SoraText style={[textStyles.textWhite, textStyles.text40]}>
            Some Layout
          </SoraText>
          <View>
            <InterText style={[textStyles.textWhite, textStyles.text20]}>
              Add Something More!
            </InterText>
          </View>
        </View>
      </SignInUpLayout>
    </View>
  );
}
