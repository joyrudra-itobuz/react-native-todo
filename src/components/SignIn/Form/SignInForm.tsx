import {StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SoraText from '../../global/text/SoraText';
import textStyles from '../../../styles/textStyles';
import layoutStyles from '../../../styles/layoutStyles';
import InputRounded from '../../global/Inputs/InputRounded';
import spacingStyles from '../../../styles/spacingStyles';
import RoundedButton from '../../global/ButtonsLinks/RoundedButton';

export default function SignInForm() {
  return (
    <View>
      <View style={[layoutStyles.flexCenter, spacingStyles.p20]}>
        <SoraText style={textStyles.text24}>Welcome Back</SoraText>
        <SoraText style={[textStyles.text14, textStyles.textGray]}>
          Enter your Details Below
        </SoraText>
      </View>
      <View style={[styles.mt24, styles.inputContainer]}>
        <InputRounded label="Mobile Number" />
        <InputRounded label="Password" />
        <TouchableOpacity>
          <RoundedButton>Some</RoundedButton>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgBlack: {
    backgroundColor: '#000000',
  },
  mb24: {
    marginBottom: 24,
  },
  mt24: {
    marginTop: 24,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
});
