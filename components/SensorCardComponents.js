import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { COLORS, FONTS } from './theme';

// a title component that receives title as props
export const Title = ({ title }) => {
    return (
        <View>
            <Text style={{ ...FONTS.h4, padding: 0 }}>{title}</Text>
        </View>
    )
}

// status indicator component that indicates if the sensor is active or not
export const StatusIndicator = () => {
    const [isActive, setIsActive] = useState(true); 

    // // if(data.relative_humidity === null){
    // //     setIsActive(false)
    // }

    return(
        <View style={{ flexDirection: 'row', gap: 5, paddingTop: 5, alignItems: 'center' }}>
            <View style={isActive ? { width: 15, height: 15, borderRadius: 50, backgroundColor: '#45FF6E'} : { width: 15, height: 15, borderRadius: 50, backgroundColor: 'red'}}></View>
            {isActive ? <Text style={{ ...FONTS.body5 }}>Active</Text> : <Text style={{ ...FONTS.body5 }}>Inactive</Text>}
        </View>
    )
}

// timestamp component that renders the date and time
export const TimeStamp = ({ timestamp }) => {
    return (
    <View>
        <Text style={{ ...FONTS.h5 }}>{timestamp}</Text>
    </View>
    )
}

// Current reading component that receives current and unit data as props
export const Current = ({ current, unit }) => {
    const [isGood, setIsGood] = useState(true)

    // if(data.relative_humidity < 50){
    //     setIsGood(false)
    // }

    return (
        <View style={{marginLeft: -30}}>
            <Text style={{ ...FONTS.body5 }}>Current</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={isGood ? { ...FONTS.h2, color: '#45FF6E' } : { ...FONTS.h1, color: 'red' }}>{current}</Text>
                <Text style={isGood ? { ...FONTS.h2, color: '#45FF6E', paddingHorizontal: 3 } : { ...FONTS.h1, color: 'red' }}>{unit}</Text>
            </View>
        </View>
    )
}

// icon component
export const Icon = ({ name }) => {
    return(
        <View style={{flex: 1, backgroundColor: '#ffffff', borderRadius: 8, elevation: 4, shadowColor: '#000000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.2, shadowRadius: 2,
                    padding: 16, width: 80, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialCommunityIcons name={name} size={34} color='#555' />
        </View>
    )
}
