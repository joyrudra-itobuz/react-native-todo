import {StyleSheet, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  layoutContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
});

export default function SignInUpLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return <View style={styles.layoutContainer}>{children}</View>;
}
