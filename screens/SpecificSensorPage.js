import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import SensorChart from '../components/SensorChart';

import AmbientParamsSensorsDataFetch from '../data/AmbientParamsSensorsDataFetch';

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



  return (
    <View>
      <Text>{name}{type} {unit}</Text>
      <SensorChart data = {sensorType(name)}/>
    </View>
  )
}

export default SpecificSensorPage

const styles = StyleSheet.create({})