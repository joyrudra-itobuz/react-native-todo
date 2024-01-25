import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import textStyles from '../../../styles/textStyles';
import bgStyles from '../../../styles/bgStyles';

export default function RoundedButton({
  children,
}: Readonly<{children: ReactNode}>) {
  return (
    <View style={[style.container, bgStyles.bgNeonGreen]}>
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
    padding: 16,
    borderRadius: 24,
  },
});
