import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bgStyles from '../../styles/bgStyles';
import layoutStyles from '../../styles/layoutStyles';
import RestrictedScreens from '../../components/global/Auth/RestrictedScreens';
import {apiCall} from '../../helper/apiCall';
import {Note} from '../../types/noteTypes';
import NoteComponent from '../../components/Home/Note/NoteComponent';
import spacingStyles from '../../styles/spacingStyles';
import SoraText from '../../components/global/text/SoraText';
import {staticUserData} from '../../data/static';
import textStyles from '../../styles/textStyles';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  neonTheme: {backgroundColor: '#D7FC70', color: 'black'},
  blueTheme: {backgroundColor: '#2997ff', color: 'black'},
  greenTheme: {backgroundColor: '#5eff84', color: 'black'},
  orangeTheme: {backgroundColor: '#ffa459', color: 'black'},
  lavenderTheme: {backgroundColor: '#a07dff', color: 'black'},
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
});

const customStyledArray = [
  {...styles.neonTheme},
  {...styles.blueTheme},
  {...styles.greenTheme},
  {...styles.orangeTheme},
  {...styles.lavenderTheme},
];

const Home = gestureHandlerRootHOC(() => {
  const [allNotes, setAllNotes] = useState<Array<Note>>([]);

  async function getAllNotes() {
    try {
      const response = await apiCall<Array<Note>, null>(
        '/notes/all-notes',
        'GET',
      );

      if (response.success) {
        setAllNotes(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch(e: string) {
    if (!e.length) {
      getAllNotes();
      return;
    }

    const filteredData = allNotes.filter(
      note =>
        note.body.toLowerCase().includes(e.toLowerCase()) ||
        note.title.toLowerCase().includes(e.toLowerCase()),
    );

    setAllNotes(filteredData);
  }

  useEffect(() => {
    getAllNotes();
  }, []);

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
        <ScrollView>
          <View
            style={[
              layoutStyles.heightFull,
              layoutStyles.flexCol,
              spacingStyles.gap16,
            ]}>
            {allNotes.map((data, index) => (
              <NoteComponent
                data={data}
                key={data._id}
                customStyles={customStyledArray[index % 5]}
                allNotes={allNotes}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </RestrictedScreens>
  );
});

export default Home;
