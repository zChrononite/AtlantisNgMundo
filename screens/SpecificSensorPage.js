import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {React, useState, useEffect} from 'react'
import SensorChart from '../components/SensorChart';
import MainPageHeader from './constants/MainPageHeader';
import SensorsMainPage from './SensorsMainPage';
import SensorsDataFetch from '../data/SensorsDataFetch';

import { SIZES, FONTS, COLORS } from '../components/theme';

const sensorTypes = {
  "AIR TEMPERATURE": "air_temperature",
  "RELATIVE HUMIDITY": "relative_humidity",
  "CO2 LEVEL": "co2_level",
  "INTENSITY ILLUMINATION": "intensity_illumination",
  "WATER TEMPERATURE": "water_temperature",
  "PH LEVEL": "ph_level",
  "DISSOLVED O2 LEVEL": "dissolved_o2_level",
  "ELECTRICAL CONDUCTIVITY": "elec_conductivity",
  "TOTAL DISSOLVED SOLIDS": "total_dissolved_solids",
  "NITRITE ": "nitrite",
  "NITRATE": "nitrate",
  "AMMONIA": "ammonia",
  "PLANT HEALTH": "fish_width",
  "FISH WIDTH": "fish_length",
  "FISH LENGTH": "fish_length",
  "FISH WEIGHT": "fish_weight",
  

};

const sensorType = (name) => {
  return sensorTypes[name] || null;
};

const SpecificSensorPage = (props) => {

  const name = props.params['name'];
  const type = props.params['type'];
  const unit = props.params['unit'];
  const stat = props.params['stat'];

  const [showLastPage, setLastPage] = useState(false);

  const handleGoBack = () => {
    setLastPage(true);
  };

  const {readings, loading} = SensorsDataFetch(type);

  return (
    <>
      {!showLastPage && (
        <>
        <View >
          <View style={{flexDirection : 'row', width: SIZES.width, height: (SIZES.height*0.10)}}>
            <TouchableOpacity style={{position: 'absolute', zIndex: 1, top: 0, left: 0, padding: 10}} onPress={handleGoBack}>
              <MaterialCommunityIcons name='arrow-left' size={34} color="#fff" />
            </TouchableOpacity>
            <MainPageHeader title = {name}/>
          </View>
          <ScrollView style={styles.container}>
            
            <SensorChart data = {readings} name = {sensorType(name)} unit = {unit}/>
            <View style={{flexDirection:'row'}}>
              <Text style={{...FONTS.h3, margin: '2%', marginBottom:'0%'}}>Current Condition:</Text> 
              <Text style={{...FONTS.h3, margin: '2%', color: 'green',  marginBottom:'0%'}}>GOOD</Text> 
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{...FONTS.h3, marginHorizontal: '2%'}}>Current Reading:</Text> 
              <Text style={{...FONTS.h3, marginLeft: '2%', color: 'green'}}>{stat}{unit}</Text> 
            </View>
            <View>
              <Text style={{...FONTS.h3, margin: '2%',}}>HOW {name} AFFECTS YOUR FARM</Text> 
              <Text style={{...FONTS.body5, marginLeft: '2%'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis sapien, aliquam tempor diam. Quisque dignissim feugiat felis, non venenatis neque iaculis eu. Vivamus pretium rhoncus nulla. Ut ipsum lectus, pretium ut commodo et, maximus in turpis. Praesent sit amet mollis lectus. Mauris et massa rutrum, congue ante eu, dictum est. In in metus volutpat, pretium ante ut, ornare nisl.
              </Text> 
            </View>
            
          </ScrollView>
          
          
        </View>
        
      </>
      )}

      {showLastPage && <SensorsMainPage />}
    </>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: (SIZES.height * 0.85),
    margin: '2%',
  },

})

export default SpecificSensorPage



