import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, FONTS } from './theme';
import moment from 'moment';



  

const SensorChart = (props) => {
  const name = props.name;
  const unit = props.unit;
  const readings = props.data;

  const firstTenItems = readings.slice(0, 10); // Get the first 10 items
  const data = firstTenItems.reverse();

  const valuesArray = data.map(item => item[name]); // create an array of the values
  const maxValue = Math.max(...valuesArray); // use Math.max() to get the maximum value

  const topValue = maxValue+ (maxValue*0.10);

  


  const [selectedDataPoint, setSelectedDataPoint] = useState(null);

  const handleDataPointPress = (index) => {
    setSelectedDataPoint(index);
    Alert.alert('Data point clicked', `Index: ${data[index][name]} ${unit}, Timestamp: ${moment(data[index].timestamp).format('MMM DD, h:mm A')}`);
  }

  const chartHeight = 200;
  const chartWidth = SIZES.width - 20;
  const numberOfDataPoints = 8;
  const dataPointWidth = chartWidth / numberOfDataPoints;

  const lineStyle = {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    height: 1,
  };

  return (
    <View style={{height: (SIZES.height * 0.80)}}>
      {!data ? <Text>Loading...</Text> :
        <View style={{ backgroundColor: COLORS.primary2, 
          borderRadius: 10, 
          borderWidth: 3,
          padding: 10, 
          borderColor: COLORS.primary, 
          width: SIZES.width,
          height: chartHeight + 20,
          flexDirection: 'row' }}>
          <View style={{ justifyContent: 'space-between', height: chartHeight, marginRight: 10 }}>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>{(topValue).toFixed(2)}</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>{(topValue*.75).toFixed(2)}</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>{(topValue*.50).toFixed(2)}</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 4 }}>{(topValue*.25).toFixed(2)}</Text>
          </View>
          {data &&
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: chartHeight }}>
              {data.slice(0, numberOfDataPoints).map((item, index) => (
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
    </View>
  )
}
                  
export default SensorChart;