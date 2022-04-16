import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import BankNavigator from './navigation/BankNavigator';


export default function App() {
  const [loaded] =useFonts ({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
      <BankNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
