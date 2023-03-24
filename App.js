import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';

import LoadingScreen from './screens/LoadingScreen';
import HomeMainPage from './screens/HomeMainPage';
import BottomNavigation from './navigation/BottomNavigation';


export default function App() {

    const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        // Simulate a delay of 2 seconds before setting the loading status to false
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);

      if (isLoading) {
        return <LoadingScreen />;
      }

  return (
    <>
     <BottomNavigation/>
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

