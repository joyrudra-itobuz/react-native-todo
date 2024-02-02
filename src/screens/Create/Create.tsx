import {Button, ScrollView, View} from 'react-native';
import React from 'react';
import SoraText from '../../components/global/text/SoraText';
import bgStyles from '../../styles/bgStyles';
import layoutStyles from '../../styles/layoutStyles';
import textStyles from '../../styles/textStyles';
import {useNavigation} from '@react-navigation/native';
import CreateForm from '../../components/Create/CreateForm/CreateForm';
import spacingStyles from '../../styles/spacingStyles';

export default function Create() {
  const {navigate} = useNavigation();
  return (
    <View style={[bgStyles.bgDark, layoutStyles.flex1]}>
      <SoraText
        style={[textStyles.textCenter, textStyles.text24, spacingStyles.py20]}>
        Create
      </SoraText>
      <ScrollView style={[layoutStyles.flex1, layoutStyles.heightFull]}>
        <CreateForm />
      </ScrollView>
    </View>
  );
}
