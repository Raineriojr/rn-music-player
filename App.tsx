import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';

// **Screens
import { Home } from './src/screens/Home';

// **Layouts
import { MainLayout } from './src/layouts/Main';

export default function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}
