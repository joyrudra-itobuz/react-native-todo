import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeLayout from '../../components/global/Layouts/HomeLayout';
import {Note} from '../../types/noteTypes';
import {apiCall} from '../../helper/apiCall';
import NoteComponent from '../../components/Home/Note/NoteComponent';
import layoutStyles from '../../styles/layoutStyles';
import spacingStyles from '../../styles/spacingStyles';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const Completed = gestureHandlerRootHOC(() => {
  const [completedNotes, setCompletedNotes] = useState<Array<Note>>([]);

  async function getCompletedNotes() {
    try {
      const response = await apiCall<
        Array<Note>,
        {searchParams: {isFinished: true}}
      >('/notes/filter-notes', 'POST', {searchParams: {isFinished: true}});

      console.log('Finished', response);

      if (!response.success) {
        throw new Error();
      }

      setCompletedNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCompletedNotes();
  }, []);

  return (
    <HomeLayout>
      <ScrollView>
        <View
          style={[
            layoutStyles.heightFull,
            layoutStyles.flexCol,
            spacingStyles.gap16,
          ]}>
          {completedNotes.map((data, index) => (
            <NoteComponent
              data={data}
              key={data._id}
              customStyles={customStyledArray[index % 5]}
              allNotes={completedNotes}
              setAllNotes={setCompletedNotes}
            />
          ))}
        </View>
      </ScrollView>
    </HomeLayout>
  );
});

export default Completed;

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
