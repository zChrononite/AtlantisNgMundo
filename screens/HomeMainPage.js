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
        <View style={styles.container}>
          <MainPageHeader title='DASHBOARD'/>
          <Text>Hello</Text>
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height: (SIZES.height * 0.80)
    },

});

export default HomeMainPage

