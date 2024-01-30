import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  useEffect(() => {
    async function getToken() {
      console.log(await AsyncStorage.getItem('@accessToken'));
    }

    getToken();
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
