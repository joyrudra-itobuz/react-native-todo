import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BackLogo from '../../../../assets/images/icons/backLogo';
import {useNavigation} from '@react-navigation/native';

export default function BackButton({
  location,
}: {
  location?: string | undefined;
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[style.buttonStyle]}
      onPress={() => {
        location ? navigation.navigate(location) : navigation.goBack();
      }}>
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
