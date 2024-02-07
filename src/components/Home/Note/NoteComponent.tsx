import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {Dispatch} from 'react';
import {Note} from '../../../types/noteTypes';
import SoraText from '../../global/text/SoraText';
import spacingStyles from '../../../styles/spacingStyles';
import layoutStyles from '../../../styles/layoutStyles';
import textStyles from '../../../styles/textStyles';
import DeleteLogo from '../../../../assets/images/icons/DeleteLogo';
import FinishLogo from '../../../../assets/images/icons/FinishLogo';
import {ScrollView, Swipeable} from 'react-native-gesture-handler';
import bgStyles from '../../../styles/bgStyles';
import {apiCall} from '../../../helper/apiCall';
import {AxiosError} from 'axios';

const NoteComponent = ({
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

  async function handleUpdate() {
    try {
      const response = await apiCall<Note, {_id: string; isFinished: boolean}>(
        '/notes/add-edit-note',
        'POST',
        {
          _id: data._id,
          isFinished: !data.isFinished,
        },
      );

      if (!response) {
        throw new Error('No Response!');
      }

      if (response.success) {
        const index = allNotes.findIndex(note => note._id === data._id);
        const copy = [...allNotes];
        copy[index].isFinished = response.data.isFinished;
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
            <FinishLogo onPress={handleUpdate} />
          </TouchableOpacity>
        </View>
        <SoraText
          style={[
            textStyles.fontSoraBold,
            textStyles.text24,
            customStyles,
            data.isFinished && textStyles.textLineThrough,
          ]}>
          {data.title}
        </SoraText>
        <SoraText style={[customStyles]}>{data.body}</SoraText>
      </ScrollView>
    </Swipeable>
  );
};
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
    bottom: 10,
    right: 10,
    borderRadius: 20,
  },
});

export default NoteComponent;
