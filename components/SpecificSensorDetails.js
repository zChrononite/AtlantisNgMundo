import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import { FONTS } from './theme'

const SpecificSensorDetails = () => {

  return (
    <View style={{ paddingVertical: 15, paddingHorizontal: 15}}>
        <View style={{paddingVertical: 10 }}>
        <Text style={{ ...FONTS.h4 }}>How Air Humidity Affect Your Farm?</Text>
        <Text style={{ ...FONTS.body5, textAlign: 'justify', paddingVertical: 10,}} >
            The graph displays the latest data on air humidity for the previous 10 hours.
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        </View>
    </View>
  )
}

export default SpecificSensorDetails