import {View} from 'react-native';
import React, {useContext} from 'react';
import RestrictedScreens from '../../components/global/Auth/RestrictedScreens';
import SoraText from '../../components/global/text/SoraText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import bgStyles from '../../styles/bgStyles';
import layoutStyles from '../../styles/layoutStyles';
import RoundedButton from '../../components/global/ButtonsLinks/RoundedButton';
import spacingStyles from '../../styles/spacingStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../context/UserContext';
import textStyles from '../../styles/textStyles';

export default function Settings() {
  const {navigate} = useNavigation();
  const {profile} = useContext(UserContext);

  async function handleLogout() {
    await AsyncStorage.removeItem('@accessToken');

    navigate('SignIn' as never);
  }

  return (
    <RestrictedScreens>
      <View style={[bgStyles.bgDark, layoutStyles.flex1, spacingStyles.py20]}>
        <View>
          <SoraText>Hello,</SoraText>
          <SoraText style={textStyles.text24}>{profile?.name}</SoraText>
        </View>
        <SoraText
          style={[
            textStyles.textCenter,
            spacingStyles.py20,
            textStyles.text20,
          ]}>
          You Can Change Your Preferences Here!
        </SoraText>
        <View style={[]}>
          <TouchableOpacity onPress={handleLogout}>
            <RoundedButton>Log Out</RoundedButton>
          </TouchableOpacity>
        </View>
      </View>
    </RestrictedScreens>
  );
}
