import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SpecificSensorPage from './SpecificSensorPage';
import {  useState, useEffect, useRef, React } from 'react'

import MainPageHeader from './constants/MainPageHeader';
import CurrentAmbientParamsSensorsDataFetch from '../data/CurrentAmbientParamsSensorsDataFetch';
import { SIZES } from '../components/theme';

import SensorCardContent from '../components/SensorCardContent';

const SensorsMainPage = () => {

  const [showNextPage, setShowNextPage] = useState(false);

  const ambientSensors = CurrentAmbientParamsSensorsDataFetch();



  return (
    <View stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      { !showNextPage && 
        <View>
          <MainPageHeader title='SENSORS'/>
          <ScrollView style={styles.container}>
            <SensorCardContent latestData={ambientSensors}/>
          </ScrollView>
          
          
        </View>

      }
      {
        showNextPage && <SpecificSensorPage />
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

export default SensorsMainPage