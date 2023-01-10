import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// **Styles
import colors from '../../src/styles/colors.json';
import { Style } from './main-layout.style';

export const MainLayout = ({ children }) => {
  return (
    <View style={Style.container}>
      <StatusBar
        translucent
        style='inverted'
        backgroundColor={colors.backgroundColor}
      />
      {children}
    </View>
  )
}
