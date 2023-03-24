import { COLORS, FONTS } from '../components/theme';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';


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
        {/* Home */}
        <TouchableOpacity onPress={() => setActiveScreen('HomeMainPage')} style={{alignItems: 'center', justifyContent: 'center', }}>
            {activeScreen  === 'HomeMainPage' ?( <Entypo name='home' size={24} color={COLORS.primary}/>
            ) : ( <AntDesign name='home' size={24} color={COLORS.gray70}/>)
            }    
            <Text style={{ color: activeScreen === 'HomeMainPage' ? COLORS.primary : COLORS.black , ...FONTS.h2}}>Dashboard</Text>
        </TouchableOpacity>

        {/* Actautors */}
        <TouchableOpacity onPress={() => setActiveScreen('ActuatorsMainPage')} style={{alignItems: 'center', justifyContent: 'center', }}>

            {activeScreen  === 'ActuatorsMainPage' ? ( <MaterialCommunityIcons name='pipe-valve' size={24} color={COLORS.primary}/>
            ) : ( <MaterialCommunityIcons name='pipe-valve' size={24} color={COLORS.gray70}/>)
            }
            <Text style={{ color: activeScreen === 'ActuatorsMainPage' ? COLORS.primary : COLORS.black }}>Actuators</Text>

        </TouchableOpacity>

        {/* Sensors */}
        <TouchableOpacity onPress={() => setActiveScreen('SensorsMainPage')} style={{alignItems: 'center', justifyContent: 'center', }}>

            {activeScreen  === 'SensorsMainPage' ? ( <MaterialCommunityIcons name='bullseye' size={24} color={COLORS.primary}/>
            ) : ( <MaterialCommunityIcons name='bullseye' size={24} color={COLORS.gray70}/>)
            }
            <Text style={{ color: activeScreen === 'SensorsMainPage' ? COLORS.primary : COLORS.black, }}>Sensors</Text>

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
      height: 80,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTopWidth: 1,
    }
  });

export default BottomNavigation