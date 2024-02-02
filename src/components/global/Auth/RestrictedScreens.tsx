import React, {ReactNode, useContext, useLayoutEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../../context/UserContext';
import {staticUserData} from '../../../data/static';

export default function RestrictedScreens({
  children,
}: Readonly<{children: ReactNode}>) {
  const {setProfile} = useContext(UserContext);
  useLayoutEffect(() => {
    async function getToken() {
      const accessToken = await AsyncStorage.getItem('@accessToken');

      if (accessToken) {
        setProfile(staticUserData);
      }
    }

    getToken();
  });

  return <>{children}</>;
}
