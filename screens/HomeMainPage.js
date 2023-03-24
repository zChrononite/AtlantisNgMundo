import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeMainPage = () => {
  return (
    <View style={styles.container}>
      <Text>HomeMainPage</Text>
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

export default HomeMainPage

