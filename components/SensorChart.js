import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, FONTS } from './theme';
import moment from 'moment';



  

const SensorChart = (props) => {
  const name = props.name;
  const unit = props.unit;
  const readings = props.data;

  const firstTenItems = readings.slice(0, 7); // Get the first 5 items
  const data = firstTenItems.reverse();

  const valuesArray = data.map(item => item[name]); // create an array of the values
  const maxValue = Math.max(...valuesArray); // use Math.max() to get the maximum value

  const topValue = maxValue+ (maxValue*0.10);

  


  const [selectedDataPoint, setSelectedDataPoint] = useState(null);

  const handleDataPointPress = (index) => {
    setSelectedDataPoint(index);
    Alert.alert('Status', `Reading: ${data[index][name]} ${unit} \nTimestamp: ${moment(data[index].timestamp).format('MMM DD, h:mm A')}`);
  }

  const chartHeight = 100;
  const chartWidth = SIZES.width - 20;
  const numberOfDataPoints = 8;
  const dataPointWidth = chartWidth / numberOfDataPoints;

  const lineStyle = {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    height: 1,
  };

  return (
    <View >
      {!data ? <Text>Loading...</Text> :
        <View style={{ backgroundColor: COLORS.primary2, 
          borderRadius: 10, 
          borderWidth: 3,
          padding: 10,
          marginRight: 5,
          marginLeft: 5, 
          borderColor: COLORS.primary, 
          height: chartHeight + 80,
          flexDirection: 'row' }}>
          <View style={{ justifyContent: 'space-between', height: chartHeight,}}>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 5 }}>{(topValue).toFixed(2)}{unit}</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 5 }}>{(topValue*.80).toFixed(2)}{unit}</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 5 }}>{(topValue*.60).toFixed(2)}{unit}</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: chartHeight / 5 }}>{(topValue*.40).toFixed(2)}{unit}</Text>
            <Text style={{ color: COLORS.primary, ...FONTS.h5, marginBottom: 0 }}>{(topValue*.20).toFixed(2)}{unit}</Text>
          </View>
          {data &&
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: chartHeight }}>
              {data.slice(0, numberOfDataPoints).map((item, index) => (
                <View  style={{ alignItems: 'center', width: dataPointWidth }} >
                    <TouchableOpacity
                    key={index}
                    onPress={() => handleDataPointPress(index)}
                    activeOpacity={0.7}>
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: selectedDataPoint === index ? COLORS.primary : COLORS.primary3, marginBottom: item[name] * (chartHeight / 100), borderWidth: 1, borderColor: selectedDataPoint === index ? COLORS.white : COLORS.primary }}>
                    </View>
              
                    
                    </TouchableOpacity>
                  <Text style={{ color: COLORS.primary, ...FONTS.h6, alignItems: 'center', bottom: -60, justifyContent:'center' , textAlign: 'center'}}>{moment(item.timestamp).format('MMM DD, h:mm A')}</Text>

                </View>
                
              ))}
            </View>
          }
          </View>
      }
    </View>
  )
}
                  
export default SensorChart;