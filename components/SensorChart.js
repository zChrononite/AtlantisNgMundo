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
  

  return (
    <>
      {props.loading ? <Text>Loading...</Text> :
        <View style={{ backgroundColor: COLORS.primary2, 
          borderRadius: 10, 
          padding: 10, 
          borderColor: COLORS.primary2, 
          width: SIZES.width,
          height: 300  }}>
          {props.readings &&
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              {props.readings.slice(0, 5).map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleDataPointPress(index)}
                  activeOpacity={0.7}
                  style={{ flex: 1, alignItems: 'center' }}>
                  <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: selectedDataPoint === index ? COLORS.primary : COLORS.primary3, marginBottom: item[name] * 2, borderWidth: 1, borderColor: selectedDataPoint === index ? COLORS.white : COLORS.primary }}>
                  </View>
                  <Text style={{ color: COLORS.white, fontSize: 16, marginTop: 10 }}>{moment(item.timestamp).format('MMM DD, h:mm A')}</Text>
                  {index > 0 && (
                    <View
                      style={{
                        position: 'absolute',
                        top: props.readings[index - 1][name] * 2 + 10,
                        bottom: item[name] * 2 + 10,
                        left: ((SIZES.width - 20) / 5) * (index - 1) + 9,
                        right: ((SIZES.width - 20) / 5) * index + 1,
                        backgroundColor: selectedDataPoint === index ? COLORS.primary : COLORS.primary3,
                      }}
                    />
                  )}
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
