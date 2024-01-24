import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export default function SoraText({
  children,
  ...textProps
}: Readonly<{
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}>) {
  return (
    <Text {...textProps} style={[styles.customText, textProps.style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'Sora-Regular',
    color: 'white',
  },
});
