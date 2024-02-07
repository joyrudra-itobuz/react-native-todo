import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SoraText from '../../global/text/SoraText';
import textStyles from '../../../styles/textStyles';
import layoutStyles from '../../../styles/layoutStyles';
import InputRounded from '../../global/Inputs/InputRounded';
import spacingStyles from '../../../styles/spacingStyles';
import RoundedButton from '../../global/ButtonsLinks/RoundedButton';
import {FormProvider, useForm} from 'react-hook-form';
import {ApiResponse, SignUp} from '../../../types/globalTypes';
import {yupResolver} from '@hookform/resolvers/yup';
import {signUpValidationSchema} from '../../../validators/userValidators';
import {useNavigation} from '@react-navigation/native';
import GoogleIcon from '../../../../assets/images/icons/googleLogo';
import AppleIcon from '../../../../assets/images/icons/appleLogo';
import bgStyles from '../../../styles/bgStyles';
import {REGISTER_USER_MUTATION} from '../../../graphql/auth/auth.graphql';
import {useMutation} from '@apollo/client';

export default function SignUpForm() {
  const form = useForm<SignUp>({
    resolver: yupResolver(signUpValidationSchema),
  });

  const {navigate} = useNavigation();

  const [registerUser, {loading}] = useMutation(REGISTER_USER_MUTATION, {
    onCompleted: ({register}: {register: ApiResponse}) => {
      if (register.success) {
        navigate('SignIn');
      } else {
        console.log('Error');
      }
    },
    onError: error => {
      console.log(error);
    },
  });

  const onSubmit = (formValue: SignUp) => {
    registerUser({variables: formValue});
  };

  return (
    <FormProvider {...form}>
      <View style={[layoutStyles.flexCenter]}>
        <SoraText style={[textStyles.text24, textStyles.fontSoraBold]}>
          Get Started
        </SoraText>
        <SoraText style={[textStyles.text14, textStyles.textGray]}>
          Enter your Details Below
        </SoraText>
      </View>
      <View style={[spacingStyles.mt24, styles.inputContainer]}>
        <InputRounded label="Email" name="email" />
        <InputRounded
          label="Phone"
          name="phoneNumber"
          keyboardType="number-pad"
        />
        <InputRounded label="Password" name="password" />
        <InputRounded label="Confirm Password" name="confirmPassword" />

        <TouchableOpacity onPress={form.handleSubmit(onSubmit)}>
          <RoundedButton>Submit</RoundedButton>
        </TouchableOpacity>
      </View>

      <View style={[layoutStyles.widthFull]}>
        <View style={[styles.continueWithContainer, layoutStyles.widthFull]}>
          <View style={styles.dashedLine} />
          <SoraText>Or continue with</SoraText>
          <View style={styles.dashedLine} />
        </View>

        <View
          style={[
            layoutStyles.flexRow,
            layoutStyles.justifyBetween,
            spacingStyles.pt20,
          ]}>
          <TouchableOpacity
            style={[
              spacingStyles.p20,
              spacingStyles.px60,
              bgStyles.borderGray,
              bgStyles.b1,
              bgStyles.roundedLg,
            ]}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              spacingStyles.p20,
              spacingStyles.px60,
              bgStyles.borderGray,
              bgStyles.b1,
              bgStyles.roundedLg,
            ]}>
            <AppleIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.redirect}>
        <SoraText>Already have an account?</SoraText>
        <Button
          title="Sign In"
          color={'black'}
          onPress={() => navigate('SignIn')}
        />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  bgBlack: {
    backgroundColor: '#000000',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  redirect: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
  },
  continueWithContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dashedLine: {
    height: 1,
    width: '33%',
    backgroundColor: '#808080',
  },
});
