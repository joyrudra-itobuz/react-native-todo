import {StyleSheet, View} from 'react-native';
import React from 'react';
import BrandLogo from '../../../../assets/images/icons/brandLogo';
import spacingStyles from '../../../styles/spacingStyles';

const styles = StyleSheet.create({
  layoutContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111;',
  },

  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function SignInUpLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <View style={[styles.layoutContainer]}>
      <View style={styles.mainContainer}>
        <View style={[spacingStyles.p20]}>
          <BrandLogo />
        </View>
        {children}
      </View>
    </View>
  );
}
