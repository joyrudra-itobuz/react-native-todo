import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {useRef, useState} from 'react';
import textStyles from '../../../styles/textStyles';
import InterText from '../text/InterText';
import {useController, useFormContext} from 'react-hook-form';
import bgStyles from '../../../styles/bgStyles';

type Props = TextInputProps & {
  label: string;
  name: string;
};

export default function InputRounded({label, name, ...inputProps}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput | null>(null);
  const {register, control} = useFormContext();
  const {field, fieldState} = useController({
    control,
    name,
  });

  const text = field.value;

  return (
    <View
      style={[
        styles.container,
        fieldState.error ? bgStyles.borderRed : bgStyles.borderWhite,
      ]}>
      <TextInput
        {...inputProps}
        {...register(name)}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={value => field.onChange(value)}
        style={[styles.input, textStyles.fontInter]}
      />
      <InterText
        style={[
          styles.labelDefault,
          fieldState.error ? textStyles.textRed : textStyles.textGray,
          isFocused ? styles.labelFocus : styles.labelBlur,
          text && !isFocused && styles.hidden,
        ]}>
        {label}
      </InterText>
      {fieldState.error?.message && (
        <InterText style={styles.errorText}>
          {fieldState.error.message}
        </InterText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 16,
    width: '100%',
    position: 'relative',
  },
  input: {
    color: 'white',
    padding: -16,
  },
  labelDefault: {
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
  hidden: {
    display: 'none',
  },
  errorText: {
    color: '#EF4444',
    position: 'absolute',
    bottom: -25,
    left: 15,
  },
});
