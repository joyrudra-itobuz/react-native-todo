import {StyleSheet, View} from 'react-native';
import React from 'react';
import BrandLogo from '../../../../assets/images/icons/brandLogo';
import spacingStyles from '../../../styles/spacingStyles';
import BackButton from '../ButtonsLinks/BackButton';
import bgStyles from '../../../styles/bgStyles';
import layoutStyles from '../../../styles/layoutStyles';

export default function SignInUpLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <View style={[styles.layoutContainer]}>
      <View style={[spacingStyles.p20, styles.logoContainer]}>
        <BackButton />
        <View style={[layoutStyles.flexCenter]}>
          <BrandLogo />
        </View>
      </View>
      <View style={[styles.flexLayoutMain, bgStyles.bgBlack]}>{children}</View>
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
