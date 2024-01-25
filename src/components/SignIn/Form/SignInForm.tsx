import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SoraText from '../../global/text/SoraText';
import textStyles from '../../../styles/textStyles';
import layoutStyles from '../../../styles/layoutStyles';
import InputRounded from '../../global/Inputs/InputRounded';
import spacingStyles from '../../../styles/spacingStyles';
import RoundedButton from '../../global/ButtonsLinks/RoundedButton';
import {FormProvider, useForm} from 'react-hook-form';
import {SignIn} from '../../../types/globalTypes';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInValidationSchema} from '../../../validators/userValidators';

export default function SignInForm() {
  const form = useForm<SignIn>({
    resolver: yupResolver(signInValidationSchema),
  });

  function onSubmit(formValues: SignIn) {
    console.log('Called!');
    console.log(formValues);
  }

  return (
    <FormProvider {...form}>
      <View>
        <View style={[layoutStyles.flexCenter, spacingStyles.p20]}>
          <SoraText style={textStyles.text24}>Welcome Back</SoraText>
          <SoraText style={[textStyles.text14, textStyles.textGray]}>
            Enter your Details Below
          </SoraText>
        </View>
        <View style={[styles.mt24, styles.inputContainer]}>
          <InputRounded
            label="Phone Number"
            name="phoneNumber"
            keyboardType="number-pad"
          />
          <InputRounded label="Password" name="password" />

          <TouchableOpacity onPress={form.handleSubmit(onSubmit)}>
            <RoundedButton>Submit</RoundedButton>
          </TouchableOpacity>
        </View>
      </View>
    </FormProvider>
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
    gap: 32,
  },
});
