import { StyleSheet } from "react-native";

import colors from '../styles/colors.json';

export const Style = StyleSheet.create({
  container: {
    marginTop: '10%',
    width: '100%',
    flexDirection: 'column'
  },
  image: {
    flexGrow: 0,
    height: '100%',
    width: '100%',
    maxHeight: 350,
    marginBottom: 32,
    alignSelf: 'center',
    borderRadius: 14
  },
})