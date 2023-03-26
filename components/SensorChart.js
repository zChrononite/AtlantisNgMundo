import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { COLORS, SIZES, FONTS } from './theme';
import moment from 'moment';

import AmbientParamsSensorsDataFetch from '../data/AmbientParamsSensorsDataFetch';

const SensorChart = (props) => {

    const {readings, loading} = AmbientParamsSensorsDataFetch();
    const name = props.data;
    console.log(readings);

 

  return (
    
    <>
    
        { loading ?  <Text>Loading...</Text> :
    <View horizontal={true} showsHorizontalScrollIndicator={false}  style={{ backgroundColor: COLORS.primary2 , borderRadius: 10, padding: 10, borderColor: COLORS.primary2, width: SIZES.width }} >
      {readings && 
       <LineChart
        data={{
        labels: readings.map(item => moment(item.timestamp).format('MMM DD, h:mm A')),
        datasets: [
            {
                data: readings.map(item => item[name])
            }
        ]
        }}
        width={10} // from react-native
        height={350}
        yAxisLabel=""
        yAxisSuffix="%"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
        backgroundColor: COLORS.primary,
        backgroundGradientFrom: COLORS.primary,
        backgroundGradientTo: COLORS.primary3,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 5,
            paddingTop: 20,
        },
        propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: COLORS.primary3
        }
        }}
        bezier
        style={{
        borderRadius: 10
        }}
    />}
     </View>
      }
    </>
  )
}

export default SensorChart