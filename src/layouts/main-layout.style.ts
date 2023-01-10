import Constants from 'expo-constants';
import { StyleSheet } from "react-native";

import colors from '../styles/colors.json';

const STATUSBARHEIGHT = Constants.statusBarHeight;

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: STATUSBARHEIGHT + 38,
    padding: 38,
    backgroundColor: colors.backgroundColor
  }
})