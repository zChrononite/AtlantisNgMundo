import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {React, useState} from 'react'
import SensorChart from '../components/SensorChart';
import MainPageHeader from './constants/MainPageHeader';
import SensorsMainPage from './SensorsMainPage';

import { SIZES, FONTS, COLORS } from '../components/theme';

const sensorTypes = {
  "AIR TEMPERATURE": "air_temperature",
  "RELATIVE HUMIDITY": "relative_humidity",
  "C02 LEVEL": "co2_level",
  "INTENSITY ILLUMINATION": "intensity_illumination",
};

const sensorType = (name) => {
  return sensorTypes[name] || null;
};



const SpecificSensorPage = (props) => {

  const name = props.params['name'];
  const type = props.params['type'];
  const unit = props.params['unit'];

  const [showLastPage, setLastPage] = useState(false);

  const handleGoBack = () => {
    setLastPage(true);
  };



  return (
    <>
      {!showLastPage && (
        <View>
          <View style={{flexDirection : 'row', width: SIZES.width, height: (SIZES.height*0.10)}}>
            <TouchableOpacity style={{position: 'absolute', zIndex: 1, top: 0, left: 0, padding: 10}} onPress={handleGoBack}>
              <MaterialCommunityIcons name='arrow-left' size={34} color="#fff" />
            </TouchableOpacity>
            <MainPageHeader title = {name}/>
          </View>
          <SensorChart data = {sensorType(name)}/>
        </View>
      )}

      {showLastPage && <SensorsMainPage />}
    </>
    
    
  )
}

export default SpecificSensorPage

const styles = StyleSheet.create({})