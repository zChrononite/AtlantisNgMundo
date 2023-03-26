import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../components/theme'


const MainPageHeader = ({ title }) => {
  return (
    <View style={{backgroundColor: '#ffff', width: SIZES.width}}>
        <View style={{ 
          height: (SIZES.height*0.08),
          width: '100%',
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
          borderBottomLeftRadius: 7,
          borderBottomRightRadius: 7,
        }}
          >
        <Text style={{ ...FONTS.h1, color: 'white' }}>{title}</Text>
        </View>
    </View>
  )
}

export default MainPageHeader