import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SpecificSensorPage from './SpecificSensorPage';
import { useState } from 'react';
import MainPageHeader from './constants/MainPageHeader';

const SensorsMainPage = () => {

  const [showNextPage, setShowNextPage] = useState(false);


  return (
    <View stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      { !showNextPage && 
        <View>
          <MainPageHeader title='Sensors'/>
        </View>
      }
      {
        showNextPage && <SpecificSensorPage />
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

});

export default SensorsMainPage