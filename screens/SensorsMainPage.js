import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SpecificSensorPage from './SpecificSensorPage';
import {  useState, useEffect, useRef, React } from 'react'

import MainPageHeader from './constants/MainPageHeader';
import CurrentSensorsStatusData from '../data/CurrentSensorsStatusData';
import { SIZES } from '../components/theme';

import SensorCardContent from '../components/SensorCardContent';

const SensorsMainPage = () => {

  const [showNextPage, setShowNextPage] = useState(false);

  const [selectedData, setSelectedData] = useState(null);

  const ambientSensors = CurrentSensorsStatusData('AmbientParams');
  const wTestBed = CurrentSensorsStatusData('WTestBed');
  const wBioFilter = CurrentSensorsStatusData('WBiofilter');
  const wSensingTank = CurrentSensorsStatusData('WSensingTank');
  const fishData = CurrentSensorsStatusData('FishData');
  const plantData = CurrentSensorsStatusData('PlantData');

  const handleDataSelection = (data) => {
    setSelectedData(data);
    setShowNextPage(true);
  }



  return (
    <View stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
       {!showNextPage && 
        <View>
          <MainPageHeader title='SENSORS'/>
          <ScrollView style={styles.container}>
            <SensorCardContent latestData={ambientSensors} onSelection={handleDataSelection}/>
            <SensorCardContent latestData={wTestBed} onSelection={handleDataSelection}/>
            <SensorCardContent latestData={wBioFilter} onSelection={handleDataSelection}/>
            <SensorCardContent latestData={wSensingTank} onSelection={handleDataSelection}/>
            <SensorCardContent latestData={fishData} onSelection={handleDataSelection}/>
            <SensorCardContent latestData={plantData} onSelection={handleDataSelection}/>
          </ScrollView>
          
          
        </View>
        }   

       {
        showNextPage && <SpecificSensorPage params = {selectedData} />
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