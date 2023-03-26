import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

import {React, useState} from 'react'
import { Dimensions } from 'react-native'
import { Current, Icon, StatusIndicator, TimeStamp, Title } from './SensorCardComponents'
import SpecificSensorPage from '../screens/SpecificSensorPage'

const SensorCardContent = ({ latestData }) => {
 
  const [showNextPage, setShowNextPage] = useState(false);
  const [data, setData] = useState([]);
  
  return (
    <View>
        {!showNextPage && 
            <>
                {/* passing latestData in another screen called SensorDetails screen using navigation onPress */}
                {
                  latestData.map((item) => (
                    <TouchableOpacity 
                      style={styles.card}
                      onPress={() => {
                        setShowNextPage(true); 
                        setData({name: item.name, type: item.type, unit: item.unit})
                      }}> 
                      <View style={{ flex: 1 , flexDirection: 'row',  alignItems: 'center', paddingHorizontal: 10, justifyContent: 'space-between' }}>
                        <View style={{ width: '40%', gap: 5, justifyContent: 'space-between'}}>
                            
                            {/* external subinfo components that receives data as props */}
                            <Title title={item.name} />
                            <StatusIndicator />
                            <TimeStamp timestamp={new Date(item.timestamp).toLocaleString()} />
                        </View>
                        <View>
                            {/* external subinfo components that receives data as props */}
                            <Current current={item.reading} unit={item.unit} />
                        </View>
                        <View>
                            {/* external subinfo components that receives data as props */}
                            <Icon name={item.icon} />
                        </View>
                      </View>
                    </TouchableOpacity >

                  ))
                }
                
              </>
        }
      {
        showNextPage && <SpecificSensorPage params = {data}/>
      }
    </View>
        
  )
}


// styling for sensor cards
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 15,
    shadowColor: '#000',
    width: Dimensions.get("window").width - 30,
    height: 150,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginHorizontal: 20,
    marginVertical: 17,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
export default SensorCardContent
