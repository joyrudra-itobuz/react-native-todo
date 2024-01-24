import {StyleSheet, View} from 'react-native';
import React from 'react';
import BrandLogo from '../../../../assets/images/icons/brandLogo';

const styles = StyleSheet.create({
  layoutContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111;',
  },
});

export default function SignInUpLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <View style={[styles.layoutContainer]}>
      <BrandLogo />
      {children}
    </View>
  );
}
