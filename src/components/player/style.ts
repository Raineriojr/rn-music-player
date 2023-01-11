import { StyleSheet } from "react-native";
import colors from '../../styles/colors.json';

export const Style = StyleSheet.create({
  playerContainer: {
    flexDirection: "column"
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },

  durationContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  time: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.title
  }
})