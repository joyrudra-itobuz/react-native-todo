import {View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import RestrictedScreens from '../Auth/RestrictedScreens';
import layoutStyles from '../../../styles/layoutStyles';
import spacingStyles from '../../../styles/spacingStyles';
import textStyles from '../../../styles/textStyles';
import SoraText from '../text/SoraText';
import {staticUserData} from '../../../data/static';
import bgStyles from '../../../styles/bgStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/core';

export default function HomeLayout({children}: {children: ReactNode}) {
  function handleSearch(e: string) {
    if (!e.length) {
      // getAllNotes();
      return;
    }

    // const filteredData = allNotes.filter(
    //   note =>
    //     note.body.toLowerCase().includes(e.toLowerCase()) ||
    //     note.title.toLowerCase().includes(e.toLowerCase()),
    // );

    // setAllNotes(filteredData);
  }

  return (
    <RestrictedScreens>
      <SafeAreaView style={[layoutStyles.flex1, bgStyles.bgDark]}>
        <View
          style={[
            layoutStyles.flexCol,
            spacingStyles.gap8,
            spacingStyles.pt20,
          ]}>
          <SoraText style={[textStyles.fontSoraBold, textStyles.text40]}>
            Hello,
          </SoraText>
          <SoraText style={[textStyles.text24]}>{staticUserData.name}</SoraText>
        </View>
        <View style={[bgStyles.bgDark, spacingStyles.py20]}>
          <TextInput
            onChangeText={e => handleSearch(e)}
            style={[styles.searchInput, bgStyles.bgBlack]}
            placeholderTextColor={'gray'}
            placeholder="Search Notes"
          />
        </View>
        <View
          style={[
            layoutStyles.flexRow,
            spacingStyles.gap8,
            layoutStyles.justifyBetween,
            spacingStyles.mb20,
          ]}>
          {/* <TouchableOpacity
            style={[
              styles.childNavigation,
              routeName === 'AllNotes' && styles.selectedRoute,
            ]}>
            <SoraText>All Notes</SoraText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.childNavigation,
              routeName === 'Completed' && styles.selectedRoute,
            ]}>
            <SoraText>Completed</SoraText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.childNavigation,
              routeName === 'Important' && styles.selectedRoute,
            ]}>
            <SoraText>Important</SoraText>
          </TouchableOpacity> */}
          {subRoutes.map(({routeName, display}, index) => (
            <SubRouteBtn routeName={routeName} display={display} key={index} />
          ))}
        </View>
        {children}
      </SafeAreaView>
    </RestrictedScreens>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    color: 'white',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  childNavigation: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#456aff',
    borderRadius: 20,
    width: '100%',
  },
  selectedRoute: {
    backgroundColor: '#63cfa2',
  },
});

const subRoutes = [
  {routeName: 'AllNotes', display: 'All Notes'},
  {routeName: 'Completed', display: 'Completed'},
  {routeName: 'Important', display: 'Important'},
];

function SubRouteBtn({
  routeName,
  display,
}: Readonly<{
  routeName: string;
  display: string;
}>) {
  const route = useRoute();
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.childNavigation,
        route.name === routeName && styles.selectedRoute,
      ]}
      onPress={() => navigate(routeName as never)}>
      <SoraText>{display}</SoraText>
    </TouchableOpacity>
  );
}
