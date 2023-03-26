import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SpecificSensorPage from './SpecificSensorPage';
import {  useState, useEffect, useRef, React } from 'react'

import MainPageHeader from './constants/MainPageHeader';
import CurrentSensorsStatusData from '../data/CurrentSensorsStatusData';
import { SIZES } from '../components/theme';

import SensorCardContent from '../components/SensorCardContent';

const SensorsMainPage = () => {

  const [showNextPage, setShowNextPage] = useState(false);

  const ambientSensors = CurrentSensorsStatusData('AmbientParams');
  const wTestBed = CurrentSensorsStatusData('WTestBed');
  const wBioFilter = CurrentSensorsStatusData('WBiofilter');
  const wSensingTank = CurrentSensorsStatusData('WSensingTank');
  const fishData = CurrentSensorsStatusData('FishData');
  const plantData = CurrentSensorsStatusData('PlantData');



  return (
    <View stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
    
        <View>
          <MainPageHeader title='SENSORS'/>
          <ScrollView style={styles.container}>
            <SensorCardContent latestData={ambientSensors}/>
            <SensorCardContent latestData={wTestBed}/>
            <SensorCardContent latestData={wBioFilter}/>
            <SensorCardContent latestData={wSensingTank}/>
            <SensorCardContent latestData={fishData}/>
            <SensorCardContent latestData={plantData}/>
          </ScrollView>
          
          
        </View>

     
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