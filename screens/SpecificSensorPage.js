import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import SensorChart from '../components/SensorChart';
import moment from 'moment';

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

  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://atlantis-api-gk7h.onrender.com/api/v1.0/AmbientParams')
      .then(response => response.json())
      .then(data => {
        setReadings(data);
        setLoading(false);
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <View>
      <Text>{name}{type} {unit}</Text>
      <SensorChart data={sensorType(name)} readings={readings} loading={loading} />
    </View>
  )
}

export default SpecificSensorPage

const styles = StyleSheet.create({})
