import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widthFull: {
    width: '100%',
  },
  heightFull: {
    height: '100%',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  overflowScroll: {
    overflow: 'scroll',
  },
});
