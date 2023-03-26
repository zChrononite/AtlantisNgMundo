//Used to fetch the data from the API
import { useState, useEffect } from 'react';

function ActuatorDataFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `https://atlantis-api-gk7h.onrender.com/api/v1.0/Actuators`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const sortedData = json.sort((a, b) => b.timestamp.localeCompare(a.timestamp)); //last entry first
        setData(sortedData);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}

export default ActuatorDataFetch;
