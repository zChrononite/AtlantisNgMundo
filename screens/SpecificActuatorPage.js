import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ActuatorsMainPage from './ActuatorsMainPage';
import MainPageHeader from './constants/MainPageHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SIZES, FONTS, COLORS } from '../components/theme';
import ActuatorToggle from '../components/ActuatorToggle';
import ActuatorDataFetch from '../data/ActuatorDataFetch';


const SpecificActuatorPage = (props) => {


  const name = props.data;
  const { data, loading } = ActuatorDataFetch();


  const [showLastPage, setLastPage] = useState(false);

  const handleGoBack = () => {
    setLastPage(true);
  };

  
  return (
    <View >
      {!showLastPage && (
        <View>
          <View style={{flexDirection : 'row', width: SIZES.width, height: (SIZES.height*0.10)}}>
            <TouchableOpacity style={{position: 'absolute', zIndex: 1, top: 0, left: 0, padding: 10}} onPress={handleGoBack}>
              <MaterialCommunityIcons name='arrow-left' size={34} color="#fff" />
            </TouchableOpacity>
            <MainPageHeader title = {name['name']}/>
          </View>
          <View>
            {/* Power Button */}
            <ActuatorToggle />
          </View>
        </View>
      )}

      {showLastPage && <ActuatorsMainPage />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: (SIZES.height),
  },

})
export default SpecificActuatorPage;
