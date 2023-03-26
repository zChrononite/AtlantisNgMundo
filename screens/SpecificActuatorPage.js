import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ActuatorsMainPage from './ActuatorsMainPage';
import BottomNavigation from '../navigation/BottomNavigation';

const SpecificActuatorPage = (props) => {
  const name = props.data;

  const [showLastPage, setLastPage] = useState(false);

  const handleGoBack = () => {
    setLastPage(true);
  };

  return (
    <View>
      {!showLastPage && (
        <View>
          <TouchableOpacity onPress={handleGoBack}>
            <Text>{name['name']}</Text>
          </TouchableOpacity>
        </View>
      )}

      {showLastPage && <ActuatorsMainPage />}

    </View>
  );
};

export default SpecificActuatorPage;
