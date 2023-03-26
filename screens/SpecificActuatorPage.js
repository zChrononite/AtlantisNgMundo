import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ActuatorsMainPage from './ActuatorsMainPage';
import MainPageHeader from './constants/MainPageHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SIZES, FONTS, COLORS } from '../components/theme';
import ActuatorToggle from '../components/ActuatorToggle';
import ActuatorDataFetch from '../data/ActuatorDataFetch';
import LottieView from 'lottie-react-native';



{/* this is for determining the type of actuator the user has selected from the actuator screen*/}
const actuatorTypes = {
  "EXHAUST FAN": "exhaust_fan",
  "EVAPORATOR COOLER": "evaporator_cooler",
  "GREENHOUSE LIGHT": "greenhouse_light",
  "WARMER LAMPS": "warmer_lamps",
  "GREENHOUSE SHADING": "greenhouse_shading",
  "WATER PUMP": "water_pump",
  "AERATION PUMP": "aeration_pump",
  "FISH FEEDER": "automatic_baiting_system",
  "WATER HEATER": "water_heater",
  "WATER AERATOR": "water_aerator",
  "WATER BLENDER": "water_blender",
  "SOLENOID VALVE 1": "solenoid_valve_1",
  "SOLENOID VALVE 2": "solenoid_valve_1",
  "SOLENOID VALVE 3": "solenoid_valve_1",
  "SOLENOID VALVE 4": "solenoid_valve_1",
};

const selectedActuator = (actName) => {
  return actuatorTypes[actName] || null;
};



const SpecificActuatorPage = (props) => {


  const name = props.data['name'];
  const status = props.data['status'];
  const icon = props.data['icon'];
  
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
            <MainPageHeader title = {name}/>
          </View>
          {loading && (
            <View style={{ justifyContent: 'center', alignItems: 'center',  width: SIZES.width, height: '86%'}}>
              <Text>LOADING...</Text>
            </View>)
          }
          {!loading &&
            <View style={{ justifyContent: 'center', alignItems: 'center',  width: SIZES.width}}>
              {/* Power Button */}
              <ActuatorToggle status={status === 1 ? true: status=== 0 ? false:false} />
            </View>
          }

          {/* This for the Status and History TExts */}
          {!loading &&  
            <View style={styles.logs}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>HISTORY</Text>
                </View>
                <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                  <Text  style={{ fontWeight: 'bold' }}>STATUS</Text>
                </View>
              </View>
            </View>
          }
          <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', margin: 5}}>
            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              {data.map((item) => (
                <View key={item.actuators_id} style={styles.card}>
                  <MaterialCommunityIcons name= {icon} size={30} color={COLORS.gray70} style={styles.icon}/>
                  <View key={item.actuators_id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={{ fontSize: 16 }}>{name}</Text>
                      <Text style={{ fontSize: 10 }}>{new Date(item.timestamp).toLocaleString()}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                      {/* change the color of the text */}
                      <Text style={{  fontSize: 18, color: item[selectedActuator(name)] == 0 ? COLORS.secondary : item[selectedActuator(name)] == 1 ? COLORS.primary3 : COLORS.gray40}}>
                        {/* this is the status of the exhaust fan */}
                        <Text style={{ ...FONTS.h2, }}>{item[selectedActuator(name)] === 0 ? "OFF" : item[selectedActuator(name)] === 1 ? "ON" : "NULL"}</Text>
                      </Text>
                    </View>
                  </View>
                </View>   
              ))}
            </View>
          </ScrollView>
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

  pwrBtn: {
    alignSelf: 'center',
  },
  

  card:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: '3%',
    margin: '1%',
    elevation: 2,
    width: '90%',

  },

  logs:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    margin: '6%',
    marginBottom: '2%',
    width: '90%',

  },

  arrowContainer: {
    position: 'absolute',
    top: 15,
    left: 5,
    margin: 5,
  },
  icon: {
    marginRight: 16,
  },
  arrowIcon: {
    textShadowColor: COLORS.gray40,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  txtRight: {
    textAlign: 'right',
  }


})
export default SpecificActuatorPage;
