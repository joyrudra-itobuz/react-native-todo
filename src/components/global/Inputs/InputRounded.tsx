import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import textStyles from '../../../styles/textStyles';
import InterText from '../text/InterText';

export default function InputRounded({label}: Readonly<{label: string}>) {
  const [isFocussed, setIsFocussed] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        style={[styles.input, textStyles.fontInter]}
        // placeholder="Mobile Number"
        // placeholderTextColor={'gray'}
      />
      <InterText
        style={[
          styles.labeDefault,
          textStyles.textGray,
          isFocussed ? styles.labelFocus : styles.labelBlur,
        ]}>
        {label}
      </InterText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 16,
    borderStyle: 'solid',
    borderColor: 'white',
    width: '100%',
    position: 'relative',
  },
  input: {
    color: 'white',
    padding: -16,
  },
  labeDefault: {
    position: 'absolute',
    top: '50%',
    left: 16,
    backgroundColor: '#000',
    padding: 5,
  },
  labelBlur: {
    transform: [{translateY: 0}],
  },
  labelFocus: {
    transform: [{translateY: -30}],
  },
});
