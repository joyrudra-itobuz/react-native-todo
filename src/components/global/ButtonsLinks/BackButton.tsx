import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BackLogo from '../../../../assets/images/icons/backLogo';

export default function BackButton() {
  return (
    <TouchableOpacity style={[style.buttonStyle]}>
      <BackLogo />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  buttonStyle: {
    borderWidth: 2,
    borderColor: '#FBFBFB',
    width: 40,
    height: 40,
    padding: 6,
    borderRadius: 12,
  },
});
