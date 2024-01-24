import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export default function InterText({
  children,
  style,
  ...textProps
}: Readonly<{
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}>) {
  return (
    <Text {...textProps} style={[styles.customText, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'Inter',
  },
});
