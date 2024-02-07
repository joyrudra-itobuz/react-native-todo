import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useCallback, useState} from 'react';
import layoutStyles from '../../styles/layoutStyles';
import {apiCall} from '../../helper/apiCall';
import {Note} from '../../types/noteTypes';
import NoteComponent from '../../components/Home/Note/NoteComponent';
import spacingStyles from '../../styles/spacingStyles';
import {useFocusEffect} from '@react-navigation/native';
import HomeLayout from '../../components/global/Layouts/HomeLayout';

const styles = StyleSheet.create({
  neonTheme: {backgroundColor: '#D7FC70', color: 'black'},
  blueTheme: {backgroundColor: '#2997ff', color: 'black'},
  greenTheme: {backgroundColor: '#5eff84', color: 'black'},
  orangeTheme: {backgroundColor: '#ffa459', color: 'black'},
  lavenderTheme: {backgroundColor: '#a07dff', color: 'black'},
});

const customStyledArray = [
  {...styles.neonTheme},
  {...styles.blueTheme},
  {...styles.greenTheme},
  {...styles.orangeTheme},
  {...styles.lavenderTheme},
];

export default function AllNotes() {
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

  useFocusEffect(
    useCallback(() => {
      getAllNotes();
    }, []),
  );

  return (
    <HomeLayout>
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
              setAllNotes={setAllNotes}
            />
          ))}
        </View>
      </ScrollView>
    </HomeLayout>
  );
}
