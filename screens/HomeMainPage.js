import { StyleSheet, Text, View } from 'react-native'
import MainPageHeader from './constants/MainPageHeader'
import React, { useState } from 'react'
import ActuatorsMainPage from './ActuatorsMainPage'
import BottomNavigation from '../navigation/BottomNavigation'
import { SIZES } from '../components/theme'

const HomeMainPage = () => {

  const [showPage, setShowPage] = useState(true);
  return (
    <View stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      
      {/* Code inside the !showNextPage */}
      {showPage && 
      <View>
          <MainPageHeader title='DASHBOARD'/>
        <View style={styles.container}>
          
          <Text>Selected Edge Device</Text>
          <Text>Edge Device ID: ATM6</Text>
        </View>
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height: (SIZES.height * 0.82),
      width: SIZES.width,
      alignItems: 'center',
      justifyContent: 'center'
    },

});

export default HomeMainPage

