import { useEffect, useState } from 'react';
import AmbientParamsSensorsDataFetch from './AmbientParamsSensorsDataFetch';

const CurrentAmbientParamsSensorsDataFetch = () => {
  const [ambientSensors, setAmbientSensors] = useState([]);
  const { readings, loading } = AmbientParamsSensorsDataFetch();

  useEffect(() => {
    if (!loading && readings) {
      const sensor = readings[0]; //Get the latest array value
      
      setAmbientSensors([
        {
            id: '1',
            name: 'AIR TEMPERATURE',
            icon: 'coolant-temperature',
            reading: sensor.air_temperature,
            edge_device: sensor.edgedevice,
            unit: '°C',
            type: 'AmbientParams',
            timestamp: sensor.timestamp

        },
        {
            id: '2',
            name: 'RELATIVE HUMIDITY',
            icon: 'air-humidifier',
            reading: sensor.relative_humidity,
            edge_device: sensor.edgedevice,
            unit: '%',
            type: 'AmbientParams',
            timestamp: sensor.timestamp
        },
        {
            id: '3',
            name: 'CO2 LEVEL',
            icon: 'molecule-co2',
            reading: sensor.co2_level,
            edge_device: sensor.edgedevice,
            unit: 'ppm',
            type: 'AmbientParams',
            timestamp: sensor.timestamp
        },
        {
            id: '4',
            name: 'INTENSITY ILLUMINATION',
            icon: 'lightbulb-on-outline',
            reading: sensor.intensity_illumination,
            edge_device: sensor.edgedevice,
            unit: 'dli',
            type: 'AmbientParams',
            timestamp: sensor.timestamp
        },
        
      ]);
    }
  }, [readings, loading]);

  return (ambientSensors);
};



export default CurrentAmbientParamsSensorsDataFetch;