import { useEffect, useState } from 'react';
import SensorsDataFetch from './SensorsDataFetch';

const CurrentSensorsStatusData = (props) => {
  const [sensors, setSensors] = useState([]);
  const { readings, loading } = SensorsDataFetch(props);

  useEffect(() => {
    if (!loading && readings) {
      const sensor = readings[0]; //Get the latest array value

      if(props == "AmbientParams"){
        setSensors([
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

      if(props == "WTestBed"){
        setSensors([
          {
              id: '5',
              name: 'WATER TEMPERATURE',
              icon: 'temperature-celsius',
              reading: sensor.water_temperature,
              edge_device: sensor.edgedevice,
              unit: '°C',
              type: 'WTestBed',
              timestamp: sensor.timestamp
    
            },
            {
                id: '6',
                name: 'DISSOLVED O2 LEVEL',
                icon: 'water-circle',
                reading: sensor.dissolved_o2_level,
                edge_device: sensor.edgedevice,
                unit: 'mg/L',
                type: 'WTestBed',
                timestamp: sensor.timestamp
            },
            {
                id: '7',
                name: 'ELECTRICAL CONDUCTIVITY',
                icon: 'lightning-bolt-circle',
                reading: sensor.elec_conductivity,
                edge_device: sensor.edgedevice,
                unit: 'mS/cm',
                type: 'WTestBed',
                timestamp: sensor.timestamp
            },
            {
                id: '8',
                name: 'TOTAL DISSOLVED SOLIDS',
                icon: 'water-percent',
                reading: sensor.total_dissolved_solids,
                edge_device: sensor.edgedevice,
                unit: 'ppt',
                type: 'WTestBed',
                timestamp: sensor.timestamp
            },
            {
              id: '9',
              name: 'PH LEVEL',
              icon: 'ph',
              reading: sensor.ph_level,
              edge_device: sensor.edgedevice,
              unit: 'pH',
              type: 'WTestBed',
              timestamp: sensor.timestamp
            },
            {
              id: '10',
              name: 'NITRITE',
              icon: 'water-alert-outline',
              reading: sensor.nitrite,
              edge_device: sensor.edgedevice,
              unit: 'ppm',
              type: 'WTestBed',
              timestamp: sensor.timestamp
            },
            {
              id: '11',
              name: 'NITRATE',
              icon: 'water-alert-outline',
              reading: sensor.nitrate,
              edge_device: sensor.edgedevice,
              unit: 'mg/L',
              type: 'WTestBed',
              timestamp: sensor.timestamp
          },
          {
            id: '12',
            name: 'AMMONIA',
            icon: 'water-alert-outline',
            reading: sensor.ammonia,
            edge_device: sensor.edgedevice,
            unit: 'mg/L',
            type: 'WTestBed',
            timestamp: sensor.timestamp
        },
            
          ]);
      }

      if(props == "WSensingTank"){
        setSensors([
          {
            id: '16',
            name: 'WATER TEMPERATURE',
            icon: 'temperature-celsius',
            reading: sensor.water_temperature,
            edge_device: sensor.edgedevice,
            unit: '°C',
            type: 'WTestBed',
            timestamp: sensor.timestamp
  
          },
         
          {
              id: '17',
              name: 'ELECTRICAL CONDUCTIVITY',
              icon: 'lightning-bolt-circle',
              reading: sensor.elec_conductivity,
              edge_device: sensor.edgedevice,
              unit: 'mS/cm',
              type: 'WSensingTank',
              timestamp: sensor.timestamp
          },
          {
              id: '18',
              name: 'TOTAL DISSOLVED SOLIDS',
              icon: 'water-percent',
              reading: sensor.total_dissolved_solids,
              edge_device: sensor.edgedevice,
              unit: 'ppt',
              type: 'WSensingTank',
              timestamp: sensor.timestamp
          },
          {
            id: '19',
            name: 'PH LEVEL',
            icon: 'ph',
            reading: sensor.ph_level,
            edge_device: sensor.edgedevice,
            unit: 'pH',
            type: 'WSensingTank',
            timestamp: sensor.timestamp
          },
        ]);
      }

      if(props == "WBiofilter"){
        setSensors([
          {
            id: '13',
            name: 'NITRITE',
            icon: 'water-alert-outline',
            reading: sensor.nitrite,
            edge_device: sensor.edgedevice,
            unit: 'ppm',
            type: 'WBiofilter',
            timestamp: sensor.timestamp
          },
          {
            id: '14',
            name: 'NITRATE',
            icon: 'water-alert-outline',
            reading: sensor.nitrate,
            edge_device: sensor.edgedevice,
            unit: 'mg/L',
            type: 'WBiofilter',
            timestamp: sensor.timestamp
        },
          {
            id: '15',
            name: 'AMMONIA',
            icon: 'water-alert-outline',
            reading: sensor.ammonia,
            edge_device: sensor.edgedevice,
            unit: 'mg/L',
            type: 'WBiofilter',
            timestamp: sensor.timestamp
        },
          
        ]);
        
      }

      if(props == "PlantData"){
        setSensors([
          {
            id: '21',
            name: 'PLANT HEALTH',
            icon: 'sprout',
            reading: sensor.plant_health === 1 ? 'GOOD':'BAD',
            edge_device: sensor.edgedevice,
            unit: '',
            type: 'PlantData',
            timestamp: sensor.timestamp
          },
          
        ]);
        
      }

      if(props == "FishData"){
        setSensors([
          {
            id: '20',
            name: 'FISH WIDTH',
            icon: 'fish',
            reading: sensor.fish_width.toFixed(2),
            edge_device: sensor.edgedevice,
            unit: 'cm',
            type: 'FishData',
            timestamp: sensor.timestamp
          },
          {
            id: '21',
            name: 'FISH LENGTH',
            icon: 'fish',
            reading: sensor.fish_length.toFixed(2),
            edge_device: sensor.edgedevice,
            unit: 'cm',
            type: 'FishData',
            timestamp: sensor.timestamp
        },
          {
            id: '22',
            name: 'FISH WEIGHT',
            icon: 'fish',
            reading: sensor.fish_weight.toFixed(2),
            edge_device: sensor.edgedevice,
            unit: 'kg',
            type: 'FishData',
            timestamp: sensor.timestamp
        },
          
        ]);
      }
      
      
      
      
      
    }
  }, [readings, loading]);

  return (sensors);
};



export default CurrentSensorsStatusData;