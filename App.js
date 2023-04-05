import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';

import loadingImage from './assets/loading/giphy2.gif'
import { COLORS } from './components/theme';

export default function App() {
  const [loaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(); // call your fetch data function here
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://atlantis-api-gk7h.onrender.com/api/v1.0/Actuators');
      const data = await response.json();
      console.log(data)
    } catch(error) {
      console.log(error)

    }
    setIsLoading(false);
  };

  if (isLoading || !loaded) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={loadingImage} style={{height: 200, width: 200,}} />
      </View>
    );
  }

  return (
    <>
      <StatusBar hidden={true} />
      <BottomNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,

  },
});
