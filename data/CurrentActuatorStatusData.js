import { useEffect, useState } from 'react';
import ActuatorDataFetch from './ActuatorDataFetch';

const CurrentActuatorStatusData = () => {
  const [actDevices, setActDevices] = useState([]);
  const { data, loading } = ActuatorDataFetch();

  useEffect(() => {
    if (!loading && data) {
      const devices = data[0]; //Get the latest array value
      
      setActDevices([
        {
            id: '1',
            name: 'EXHAUST FAN',
            icon: 'fan',
            status: devices.exhaust_fan,
            edge_device: devices.edgedevice

        },
        {
            id: '2',
            name: 'EVAPORATOR COOLER',
            icon: 'pump',
            status: devices.evaporator_cooler,
            edge_device: devices.edgedevice
        },
        {
            id: '3',
            name: 'GREENHOUSE LIGHT',
            icon: 'lightbulb-on',
            status: devices.greenhouse_light,
            edge_device: devices.edgedevice
        },
        {
            id: '4',
            name: 'WARMER LAMPS',
            icon: 'globe-light',
            status: devices.warmer_lamps,
            edge_device: devices.edgedevice
        },
        {
            id: '5',
            name: 'GREENHOUSE SHADING',
            icon: 'engine',
            status: devices.ac_motors,
            edge_device: devices.edgedevice
        },
        {
            id: '6',
            name: 'WATER PUMP',
            icon: 'water-pump',
            status: devices.water_pump,
            edge_device: devices.edgedevice
        },
        {
            id: '7',
            name: 'AERATION PUMP',
            icon: 'hvac',
            status: devices.aeration_pump,
            edge_device: devices.edgedevice
        },
        {
            id: '8',
            name: 'FISH FEEDER',
            icon: 'fishbowl',
            status: devices.automatic_baiting_system,
            edge_device: devices.edgedevice
        },
        {
            id: '9',
            name: 'WATER HEATER',
            icon: 'water-boiler',
            status: devices.water_heater,
            edge_device: devices.edgedevice
        },
        {
            id: '10',
            name: 'WATER AERATOR',
            icon: 'air-humidifier',
            status: devices.water_aerator,
            edge_device: devices.edgedevice
        },
        {
            id: '11',
            name: 'WATER BLENDER',
            icon: 'waves',
            status: devices.water_blender,
            edge_device: devices.edgedevice
        },
        {
            id: '12',
            name: 'SOLENOID VALVE 1',
            icon: 'ship-wheel',
            status: devices.solenoid_valve_1,
            edge_device: devices.edgedevice
        },
        {
            id: '13',
            name: 'SOLENOID VALVE 2',
            icon: 'ship-wheel',
            status: devices.solenoid_valve_2,
            edge_device: devices.edgedevice
        },
        {
            id: '14',
            name: 'SOLENOID VALVE 3',
            icon: 'ship-wheel',
            status: devices.solenoid_valve_3,
            edge_device: devices.edgedevice
        },
        {
            id: '15',
            name: 'SOLENOID VALVE 4',
            icon: 'ship-wheel',
            status: devices.solenoid_valve_4,
            edge_device: devices.edgedevice
        },
      ]);
    }
  }, [data, loading]);

  return actDevices;
};



export default CurrentActuatorStatusData;