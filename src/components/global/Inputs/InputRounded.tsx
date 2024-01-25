import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {useRef, useState} from 'react';
import textStyles from '../../../styles/textStyles';
import InterText from '../text/InterText';
import {useController, useFormContext} from 'react-hook-form';

type Props = TextInputProps & {
  label: string;
  name: string;
};

export default function InputRounded({label, name, ...inputProps}: Props) {
  const [isFocussed, setIsFocussed] = useState(false);
  const inputRef = useRef<TextInput | null>(null);
  const [text, setText] = useState('');

  const {register, control} = useFormContext();
  const {fieldState} = useController({
    control,
    name: inputProps.id ?? '',
  });

  return (
    <View style={styles.container}>
      <TextInput
        {...inputProps}
        {...register(inputProps.id ?? '')}
        ref={inputRef}
        id={name}
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        onChangeText={e => setText(e)}
        style={[styles.input, textStyles.fontInter]}
      />
      <InterText
        style={[
          styles.labeDefault,
          textStyles.textGray,
          isFocussed ? styles.labelFocus : styles.labelBlur,
          text.length && !isFocussed ? styles.hidden : null,
        ]}>
        {label}
      </InterText>
      {fieldState.error?.message && (
        <InterText>{fieldState.error?.message}</InterText>
      )}
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
  hidden: {
    display: 'none',
  },
});
