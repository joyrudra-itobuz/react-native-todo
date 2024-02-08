import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {Dispatch} from 'react';
import {Note} from '../../../types/noteTypes';
import SoraText from '../../global/text/SoraText';
import spacingStyles from '../../../styles/spacingStyles';
import layoutStyles from '../../../styles/layoutStyles';
import textStyles from '../../../styles/textStyles';
import DeleteLogo from '../../../../assets/images/icons/DeleteLogo';
import FinishLogo from '../../../../assets/images/icons/FinishLogo';
import {
  ScrollView,
  Swipeable,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import bgStyles from '../../../styles/bgStyles';
import {apiCall} from '../../../helper/apiCall';
import {AxiosError} from 'axios';
import FavLogo from '../../../../assets/images/icons/FavLogo';

const NoteComponent = gestureHandlerRootHOC(
  ({
    data,
    customStyles,
    allNotes,
    setAllNotes,
  }: Readonly<{
    data: Note;
    customStyles: {backgroundColor: string; color: string};
    allNotes: Array<Note>;
    setAllNotes: Dispatch<React.SetStateAction<Note[]>>;
  }>) => {
    async function handleDelete() {
      try {
        const response = await apiCall<null, null>(
          `/notes/delete-note?id=${data._id}`,
          'GET',
        );

        if (!response) {
          throw new Error('No Response!');
        }

        if (response.success) {
          const index = allNotes.findIndex(note => note._id === data._id);
          const copy = [...allNotes];
          copy.splice(index, 1);
          setAllNotes(copy);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
        console.log(error);
      }
    }

    async function handleUpdate<T>(
      body: T,
      updater: 'isFinished' | 'isImportant',
    ) {
      console.log(body);

      try {
        const response = await apiCall<Note, T>(
          '/notes/add-edit-note',
          'POST',
          body,
        );

        console.log(response);

        if (!response) {
          throw new Error('No Response!');
        }

        if (response.success) {
          const index = allNotes.findIndex(note => note._id === data._id);
          const copy = [...allNotes];
          const updatableData = copy[index];

          updatableData[updater] = response.data[updater];
          setAllNotes(copy);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
        console.log(error);
      }
    }

    const renderLeftActions = (
      _progress: Animated.AnimatedInterpolation<string | number>,
      dragX: Animated.AnimatedInterpolation<string | number>,
    ) => {
      const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [-20, 0, 0, 1],
      });

      return (
        <TouchableOpacity
          onPress={handleDelete}
          style={[
            layoutStyles.heightFull,
            layoutStyles.flexCenter,
            bgStyles.bgRed,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          <Animated.Text style={[textStyles.textWhite, spacingStyles.p20]}>
            <SoraText>Delete</SoraText>
          </Animated.Text>
        </TouchableOpacity>
      );
    };

    const renderRightActions = (
      _progress: Animated.AnimatedInterpolation<string | number>,
      dragX: Animated.AnimatedInterpolation<string | number>,
    ) => {
      const trans = dragX.interpolate({
        inputRange: [-101, -100, -50, 0],
        outputRange: [-1, 0, 0, -5],
      });

      return (
        <TouchableOpacity
          onPress={handleUpdate}
          style={[
            layoutStyles.heightFull,
            layoutStyles.flexCenter,
            bgStyles.bgGreen,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          <Animated.Text style={[textStyles.textWhite, spacingStyles.p20]}>
            <SoraText>Done</SoraText>
          </Animated.Text>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        key={data._id}>
        <ScrollView
          style={[
            styles.container,
            spacingStyles.p20,
            layoutStyles.flexCol,
            spacingStyles.gap16,
            customStyles,
          ]}>
          {data.isFinished && <SoraText style={styles.done}>Done</SoraText>}
          <View
            style={[
              layoutStyles.flexRow,
              spacingStyles.gap8,
              styles.iconContainer,
            ]}>
            <TouchableOpacity onPress={handleDelete}>
              <DeleteLogo />
            </TouchableOpacity>
            <TouchableOpacity>
              <FinishLogo
                onPress={() =>
                  handleUpdate<{_id: string; isFinished: boolean}>(
                    {
                      _id: data._id,
                      isFinished: !data.isFinished,
                    },
                    'isFinished',
                  )
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleUpdate<{_id: string; isImportant: boolean}>(
                  {
                    _id: data._id,
                    isImportant: !data.isImportant,
                  },
                  'isImportant',
                )
              }>
              <FavLogo fillColor={data.isImportant && '#ffff26'} />
            </TouchableOpacity>
          </View>

          <SoraText
            style={[
              textStyles.fontSoraBold,
              textStyles.text24,
              customStyles,
              data.isFinished && styles.textLineThrough,
            ]}>
            {data.title}
          </SoraText>
          <SoraText
            style={[customStyles, data.isFinished && styles.textLineThrough]}>
            {data.body}
          </SoraText>
        </ScrollView>
      </Swipeable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7FC70',
    position: 'relative',
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0 , 1)',
    padding: 10,
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: 10,
    borderRadius: 20,
  },
  done: {
    position: 'absolute',
    color: '#000',
    fontStyle: 'italic',
    fontWeight: '900',
    letterSpacing: 20,
    fontSize: 80,
    opacity: 0.6,
  },
  textLineThrough: {
    color: '#404040',
    textDecorationLine: 'line-through',
  },
});

export default NoteComponent;
