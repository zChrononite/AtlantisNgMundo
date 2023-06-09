import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, Image } from 'react-native'
import { useState, useEffect, useRef, React, useMemo } from 'react'
import { SIZES, COLORS, FONTS } from '../components/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import SpecificActuatorPage from './SpecificActuatorPage';
import CurrentActuatorStatusData from '../data/CurrentActuatorStatusData';
import MainPageHeader from './constants/MainPageHeader';
import ActuatorDataFetch from '../data/ActuatorDataFetch';

import loadingImage from '../assets/loading/giphy2.gif'
import { ActivityIndicator } from 'react-native';

const ActuatorsMainPage = ({}) => {

  const [showNextPage, setShowNextPage] = useState(false);
  const [data, setData] = useState([]);

  const actDevices = CurrentActuatorStatusData();


  //get card width to much its height
  const [cardWidth, setCardWidth] = useState(0);



  {/* Number of columns in actautors */}
  const numColumns = 3 ;

  {/* Number of Rows in actautors */}
  const numRows = Math.ceil (actDevices.length / numColumns);


  const opacity = useRef(new Animated.Value(1)).current;

  const animation = useMemo(() =>
  Animated.sequence([
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }),
  ]),
  []
);

useEffect(() => {
  Animated.loop(animation).start();
}, [animation]);




  return (
    <View stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
      
      {/* Code inside the !showNextPage */}
      {!showNextPage && 
        // <TouchableOpacity onPress={() => setShowNextPage(true)}>
        //   <Text>Next Page</Text>
        // </TouchableOpacity>
        <View>
          <MainPageHeader title='ACTUATORS'/>
          <ScrollView style={styles.container} >
            <View style={{flexDirection: 'row', margin: 8}} >
              {/* This is to reflect the number of actuators in an array */}
              {Array.from({length:numColumns}).map((_,columnIndex)=> (
                <Animated.View key={columnIndex} style={{flex: 1}}>
                  {actDevices.slice(columnIndex * numRows, columnIndex * numRows + numRows).map((item) =>(
                    <TouchableOpacity 
                      key={item.id} 
                      style={[styles.card, { height: cardWidth}]} 
                      onPress={() => {
                        setShowNextPage(true); 
                        setData({name: item.name, icon: item.icon, status: item.status}); 
                        }}
                      onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        setCardWidth(width);
                    }}
                  >
                      <Animated.View
                          style={{
                            position: 'absolute',
                            height: 13,
                            width: 13,
                            borderRadius: 20,
                            top: '7%',
                            right: '7%',
                            backgroundColor: item.status? COLORS.primary3:COLORS.gray40,
                            zIndex: 1,
                            opacity: item.status? opacity: 1,
                            elevation: 2
                          }}
                        />
                      <View style={{alignItems: 'center', justifyContent: 'center' }}>
                          <MaterialCommunityIcons color={COLORS.primary} name={item.icon} size={40} margin={10}/>
                          <Text style={styles.text}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </Animated.View>
              ))}
              
            </View>
          </ScrollView>
        </View>
      }

      {showNextPage && 
        <>
          <SpecificActuatorPage  data = {data}/>
        </>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: (SIZES.height * 0.82)
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,

  },

  card: {
    backgroundColor: COLORS.primary2, 
    borderRadius: 5, 
    margin: 8, 
    height: 100,
    padding: 10,  
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    borderColor: COLORS.white,
  },

  text: {

    
    color: COLORS.primary,
    alignItems: 'center',
    textAlign:'center',
    justifyContent:'center',
    ...FONTS.h5,

  },
})


export default ActuatorsMainPage;
