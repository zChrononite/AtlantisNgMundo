import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import { useFonts } from 'expo-font';



export default function App() {

  const [loaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
  })

  if(!loaded) {
   return null
  }

  

  return (
    <>
    <StatusBar hidden={true}/>
    <BottomNavigation />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

