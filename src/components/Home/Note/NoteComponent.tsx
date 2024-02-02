import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Note} from '../../../types/noteTypes';
import SoraText from '../../global/text/SoraText';
import spacingStyles from '../../../styles/spacingStyles';
import layoutStyles from '../../../styles/layoutStyles';
import textStyles from '../../../styles/textStyles';
import DeleteLogo from '../../../../assets/images/icons/DeleteLogo';
import FinishLogo from '../../../../assets/images/icons/FinishLogo';
import {
  RectButton,
  Swipeable,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';

const NoteComponent = gestureHandlerRootHOC(
  ({
    data,
    customStyles,
  }: Readonly<{
    data: Note;
    customStyles: {backgroundColor: string; color: string};
  }>) => {
    return (
      <View
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
          <TouchableOpacity>
            <DeleteLogo />
          </TouchableOpacity>
          <TouchableOpacity>
            <FinishLogo />
          </TouchableOpacity>
        </View>
        <SoraText
          style={[textStyles.fontSoraBold, textStyles.text24, customStyles]}>
          {data.title}
        </SoraText>
        <SoraText style={[customStyles]}>{data.body}</SoraText>
      </View>
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
    bottom: 10,
    right: 10,
    borderRadius: 20,
  },
});

export default NoteComponent;
