import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import textStyles from '../../../styles/textStyles';

export default function RoundedButton({
  children,
}: Readonly<{children: ReactNode}>) {
  return (
    <View style={style.container}>
      <Text
        style={[
          textStyles.textCenter,
          textStyles.fontSoraSemiBold,
          textStyles.textBlack,
        ]}>
        {children}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 16,
    borderRadius: 24,
    backgroundColor: 'white',
  },
});
