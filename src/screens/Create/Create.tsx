import {Button, View} from 'react-native';
import React from 'react';
import SoraText from '../../components/global/text/SoraText';
import bgStyles from '../../styles/bgStyles';
import layoutStyles from '../../styles/layoutStyles';
import textStyles from '../../styles/textStyles';
import {useNavigation} from '@react-navigation/native';

export default function Create() {
  const {navigate} = useNavigation();
  return (
    <View style={[bgStyles.bgDark, layoutStyles.flex1]}>
      <SoraText style={[textStyles.textCenter, textStyles.text24]}>
        Create
      </SoraText>
      <Button title="Go Sign Up" onPress={() => navigate('SignIn')} />
    </View>
  );
}
