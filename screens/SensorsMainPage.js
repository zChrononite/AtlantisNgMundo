import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SpecificSensorPage from './SpecificSensorPage';
import {  useState, useEffect, useRef, React } from 'react'

import MainPageHeader from './constants/MainPageHeader';
import CurrentSensorsStatusData from '../data/CurrentSensorsStatusData';
import { FONTS, SIZES } from '../components/theme';

import SensorCardContent from '../components/SensorCardContent';

import DropdownPicker from '../components/DropDownPicker';

const options =
  [ "All Sensors", 
    "Ambient Params", 
    "Water Grow Beds",
    "Water Sensing Tank",
    "Water Biofilter",
    "Production Params"
  ];



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


  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };



  


  

  return (
    <View stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
       {!showNextPage && 
        <View>
          <MainPageHeader title='SENSORS'/>

            <Text style={{...FONTS.h2,
                          position: 'absolute',
                          top: '13%',
                          left: '5%',
                          zIndex: 11}}>{selectedOption}</Text>
            <View style={{position: 'absolute',
                          top: '12%',
                          right: '3%',
                          zIndex: 10}}>
              
              <DropdownPicker options={options} onSelect={handleOptionSelect}  />
            </View>
            

          
          
          <ScrollView style={styles.container}>
            {/* Render the filtered data */}
            {selectedOption=== 'All Sensors' &&
              <>
                <SensorCardContent latestData={ambientSensors} onSelection={handleDataSelection}/>
                <SensorCardContent latestData={wTestBed} onSelection={handleDataSelection}/>
                <SensorCardContent latestData={wSensingTank} onSelection={handleDataSelection}/>
                <SensorCardContent latestData={wBioFilter} onSelection={handleDataSelection}/>
                <SensorCardContent latestData={plantData} onSelection={handleDataSelection}/>
                <SensorCardContent latestData={fishData} onSelection={handleDataSelection}/>
              </>
              
            
            }
            {selectedOption=== 'Ambient Params' &&
              <SensorCardContent latestData={ambientSensors} onSelection={handleDataSelection}/>
            
            }
            {selectedOption=== 'Water Grow Beds' &&
              <SensorCardContent latestData={wTestBed} onSelection={handleDataSelection}/>
            
            }
            {selectedOption=== 'Water Sensing Tank' &&
              <SensorCardContent latestData={wSensingTank} onSelection={handleDataSelection}/>
            
            }
            {selectedOption=== 'Water Biofilter' &&
              <SensorCardContent latestData={wBioFilter} onSelection={handleDataSelection}/>
            
            }
            {selectedOption=== 'Production Params' &&
              <>
                <SensorCardContent latestData={plantData} onSelection={handleDataSelection}/>
                <SensorCardContent latestData={fishData} onSelection={handleDataSelection}/>
              </>
            
            }
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
    height: (SIZES.height * 0.78),
    marginTop: '15%'
  },

});

export default SensorsMainPage