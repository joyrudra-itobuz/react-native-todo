import {
  Alert,
  Button,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import SoraText from '../../global/text/SoraText';
import textStyles from '../../../styles/textStyles';
import layoutStyles from '../../../styles/layoutStyles';
import InputRounded from '../../global/Inputs/InputRounded';
import spacingStyles from '../../../styles/spacingStyles';
import RoundedButton from '../../global/ButtonsLinks/RoundedButton';
import {FormProvider, useForm} from 'react-hook-form';
import {LoginResponse, SignIn} from '../../../types/globalTypes';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInValidationSchema} from '../../../validators/userValidators';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {SIGN_IN_USER_MUTATION} from '../../../graphql/auth/auth.graphql';
import {UserContext} from '../../../context/UserContext';

export default function SignInForm() {
  const form = useForm<SignIn>({
    resolver: yupResolver(signInValidationSchema),
  });
  const {setProfile} = useContext(UserContext);

  const staticUserData = {
    email: 'joyrudra@itobuz.com',
    profileImage:
      'https://spoon-restaurant-app.s3.ap-south-1.amazonaws.com/profileImage%2F1704886302283_pexels-valeria-boltneva-11213759.jpg',
    userType: 'owner',
    name: 'Rahul Kamarkar 2.0',
    phoneNumber: '9064690593',
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTc1ZjRlZDk3YzQ5ODg4YjAzOTc3NyIsImlhdCI6MTcwNjg1MjU4NywiZXhwIjoxNzIyNDA0NTg3fQ.-j3rNfAzgdnricszaRQunhp9Q9VMNWTxJlaYKEFPxxY',
  };

  const {navigate} = useNavigation();

  const [loginInput] = useMutation(SIGN_IN_USER_MUTATION, {
    onCompleted: ({login}: {login: LoginResponse}) => {
      if (login.success) {
        AsyncStorage.setItem('@accessToken', staticUserData.accessToken);
        AsyncStorage.setItem('@refreshToken', login.data.refreshToken);

        Alert.alert('MY APP', 'Welcomes You');
        ToastAndroid.show(login.message ?? '', 300);
        navigate('app' as never);
        setProfile(staticUserData);
      } else {
        ToastAndroid.show(login.message ?? '', 300);
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  function onSubmit(formValues: SignIn) {
    console.log(formValues);
    loginInput({variables: formValues});
  }

  return (
    <FormProvider {...form}>
      <View style={layoutStyles.widthFull}>
        <View style={[layoutStyles.flexCenter, spacingStyles.p20]}>
          <SoraText style={[textStyles.text24, textStyles.fontSoraBold]}>
            Welcome Back
          </SoraText>
          <SoraText style={[textStyles.text14, textStyles.textGray]}>
            Enter your Details Below
          </SoraText>
        </View>
        <View style={[styles.mt24, styles.inputContainer]}>
          <InputRounded label="Email" name="email" />
          <InputRounded label="Password" name="password" />

          <TouchableOpacity onPress={form.handleSubmit(onSubmit)}>
            <RoundedButton>Submit</RoundedButton>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.redirect, spacingStyles.pb40]}>
        <SoraText>Don't have an account?</SoraText>
        <Button
          title="Sign Up"
          color={'black'}
          onPress={() => navigate('SignUp' as never)}
        />
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
  redirect: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
