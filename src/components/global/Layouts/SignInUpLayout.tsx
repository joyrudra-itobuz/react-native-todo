import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import BrandLogo from '../../../../assets/images/icons/brandLogo';
import spacingStyles from '../../../styles/spacingStyles';
import BackButton from '../ButtonsLinks/BackButton';
import bgStyles from '../../../styles/bgStyles';
import layoutStyles from '../../../styles/layoutStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export default function SignInUpLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  const {navigate} = useNavigation();

  useFocusEffect(() => {
    async function checkToken() {
      const accessToken = await AsyncStorage.getItem('@accessToken');

      if (accessToken) {
        navigate('app' as never);
      }
    }

    checkToken();
  });

  return (
    <View style={[layoutStyles.widthFull, bgStyles.bgDark]}>
      <View style={[styles.layoutContainer, layoutStyles.widthFull]}>
        <View style={[spacingStyles.p20, styles.logoContainer]}>
          <BackButton />
          <View style={[layoutStyles.flexCenter]}>
            <BrandLogo />
          </View>
        </View>
        <ScrollView
          style={{display: 'flex'}}
          contentContainerStyle={[
            styles.flexLayoutMain,
            bgStyles.bgBlack,
            layoutStyles.heightFull,
          ]}>
          <View style={[layoutStyles.widthFull, spacingStyles.p20]}>
            {children}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexLayoutMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    gap: 24,
  },
});
