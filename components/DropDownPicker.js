import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FONTS, SIZES } from './theme';

const DropdownPicker = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setIsOptionsVisible(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectedOption} onPress={() => setIsOptionsVisible(!isOptionsVisible)}>
        <Text style={{...FONTS.body4}}>{selectedOption}</Text>
      </TouchableOpacity>
      {isOptionsVisible && (
        <ScrollView style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity key={option} style={styles.option} onPress={() => handleOptionPress(option)}>
              <Text style={{...FONTS.body4}}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: SIZES.width*0.35,
    zIndex: 1,

  },
  selectedOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    maxHeight: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    overflow: 'scroll',
    zIndex: 2,
  },
  option: {
    padding: 10,
  },
});

export default DropdownPicker;