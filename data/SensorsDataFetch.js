//Used to fetch the data from the API
import { useState, useEffect } from 'react';

const SensorAPI = {
  "AmbientParams": `https://atlantis-api-gk7h.onrender.com/api/v1.0/AmbientParams`,
  "WTestBed": `https://atlantis-api-gk7h.onrender.com/api/v1.0/WTestBed`,
  "WBiofilter": 'https://atlantis-api-gk7h.onrender.com/api/v1.0/WBiofilter',
  "WSensingTank": 'https://atlantis-api-gk7h.onrender.com/api/v1.0/WSensingTank',
  "FishData": 'https://atlantis-api-gk7h.onrender.com/api/v1.0/FishData',
  "PlantData": 'https://atlantis-api-gk7h.onrender.com/api/v1.0/PlantData',

} ;

const SensorAPIPicker = (type) => {
  return SensorAPI[type] || null;
};

function SensorsDataFetch(props) {
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SensorAPIPicker(props))
      .then(response => response.json())
      .then(json => {
        const sortedData = json.sort((a, b) => b.timestamp.localeCompare(a.timestamp)); //last entry first
        setReadings(sortedData);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { readings, loading };
}

export default SensorsDataFetch;
