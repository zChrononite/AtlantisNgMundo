import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, FONTS } from './theme';
import moment from 'moment';

const SensorChart = (props) => {

  const name = props.data;
  const [selectedDataPoint, setSelectedDataPoint] = useState(null);

  const handleDataPointPress = (index) => {
    setSelectedDataPoint(index);
    Alert.alert('Data point clicked', `Index: ${index}, Timestamp: ${moment(props.readings[index].timestamp).format('MMM DD, h:mm A')}`);
  }

  const chartHeight = 200;
  const chartWidth = SIZES.width - 20;
  const numberOfDataPoints = 5;
  const dataPointWidth = chartWidth / numberOfDataPoints;

  const lineStyle = {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    height: 1,
  };

  return (
    <>
      {props.loading ? <Text>Loading...</Text> :
        <View style={{ backgroundColor: COLORS.primary2, 
          borderRadius: 10, 
          borderWidth: 3,
          padding: 10, 
          borderColor: COLORS.primary, 
          width: SIZES.width,
          height: chartHeight + 20,
          flexDirection: 'row' }}>
          <View style={{ justifyContent: 'space-between', height: chartHeight, marginRight: 10 }}>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>100</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>75</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>50</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>25</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: 0 }}>0</Text>
          </View>
          {props.readings &&
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: chartHeight }}>
              {props.readings.slice(0, numberOfDataPoints).map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleDataPointPress(index)}
                  activeOpacity={0.7}
                  style={{ alignItems: 'center', width: dataPointWidth }}>
                  <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: selectedDataPoint === index ? COLORS.primary : COLORS.primary3, marginBottom: item[name] * (chartHeight / 100), borderWidth: 1, borderColor: selectedDataPoint === index ? COLORS.white : COLORS.primary }}>
                  </View>
                  <Text style={{ color: COLORS.primary, ...FONTS.h5, margin: 10, alignItems: 'center', justifyContent:'center' , textAlign: 'center'}}>{moment(item.timestamp).format('MMM DD, h:mm A')}</Text>
                </TouchableOpacity>
              ))}
                  </View>
                  }
                  </View>
                  }
                  </>
                  )
                  }
                  
                  export default SensorChart;