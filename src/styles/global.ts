import { StyleSheet } from "react-native";
import colors from '../styles/colors.json';

export const Global = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.title,
    lineHeight: 40
  },
  subtitle: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.title,
    lineHeight: 40
  },

})