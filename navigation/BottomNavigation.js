import { COLORS } from '../components/theme';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


import HomeMainPage from '../screens/HomeMainPage';
import ActuatorsMainPage from '../screens/ActuatorsMainPage';
import SensorsMainPage from '../screens/SensorsMainPage';


const BottomNavigation = () => {

    const [activeScreen, setActiveScreen] = useState('HomeMainPage');

    const renderScreen = () => {
      switch (activeScreen) {
        case 'HomeMainPage':
          return <HomeMainPage />;
        case 'ActuatorsMainPage':
          return <ActuatorsMainPage />;
        case 'SensorsMainPage':
          return <SensorsMainPage/>;
        default:
          return null;
      }
    }
  
  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
      <View style={styles.bottomNavigator}>
        <TouchableOpacity onPress={() => setActiveScreen('HomeMainPage')}>
          <Text style={{ color: activeScreen === 'HomeMainPage' ? COLORS.primary : COLORS.black }}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen('ActuatorsMainPage')}>
          <Text style={{ color: activeScreen === 'ActuatorsMainPage' ? COLORS.primary : COLORS.black }}>Actuators</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen('SensorsMainPage')}>
          
          <Text style={{ color: activeScreen === 'SensorsMainPage' ? COLORS.primary : COLORS.black }}>Actuators</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bottomNavigator: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white'
    }
  });

export default BottomNavigation