import { StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS, FONTS, SIZES } from './theme'
import { useState, useRef, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';



const PowerButton = ({status}) => {

{/* this is the function for closing tthe specific actuator */}
  const [isOn, setIsOn] = useState(status);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(10);
  

  const togglePower = () => {
    setShowModal(true);
    
  };

  const resetTimer = () => {
    setCountdown(10);
    setShowModal(false);
    
  };

  useEffect(() => {
    let timerId;
    if (showModal) {
      timerId = setInterval(() => {
        setCountdown((countdown) => {
          if (countdown === 1) {
            setIsOn(!isOn);
            setShowModal(false);
            return 10;
          } else {
            return countdown - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [showModal, isOn]);

{/* this is for user pin checking before turning off the power */}
  const [showModalInput, setShowModalInput] = useState(false);
  const [showIncorrectPin, setShowIncorrectPin] = useState(false);
  const [pinNumber, setPinNumber] = useState('');
  const [activeIndicators, setActiveIndicators] = useState([false, false, false, false]);

  const toggleUserPin = () => {
    setShowModalInput(true);
    setCountdown(10);
    setShowModal(false);
  }
  
{/* CHECKING THE PIN OF THE USER HAS INPUTTED */} 

    const checkPin = () => {
        switch (pinNumber) {
          case '1234':
            setShowModalInput(false);
            resetTimer();
            setPinNumber('');
            setActiveIndicators([false, false, false, false]);
            if (isOn) {
                setIsOn(!status)
              }
              else{
                setIsOn(status)
              }
            break;
          default:
            setShowModalInput(false);
            setShowIncorrectPin(true);
            setPinNumber('');
            setActiveIndicators([false, false, false, false]);
            setIsOn(status);
        }
      };

  const handleButtonPress = (number) => {
    if (pinNumber.length < 4) {
      setPinNumber(pinNumber + number);
      setActiveIndicators([...activeIndicators.slice(0, pinNumber.length), true, ...activeIndicators.slice(pinNumber.length + 1)]);
      console.log(pinNumber)
    }
  };

  useEffect(() => {
    if (pinNumber.length === 4) {
      checkPin();
    }
  }, [pinNumber])


    
    
    return (
        <>
        <TouchableOpacity onPress={togglePower} style={styles.circleButton }>
            <MaterialCommunityIcons
            name={isOn ? 'power' : 'power'}
            size={200}
            style={styles.pwrBtn}
            color={isOn ? COLORS.primary3:COLORS.secondary}
            
            />
        </TouchableOpacity> 
    {/* this is the timer for the countdown */}
      <Modal visible={showModal} animationType="fade" transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{isOn ? 'CONFIRM POWER OFF' : 'CONFIRM POWER ON'}</Text>
            <Text style={styles.countdownText}>{countdown}</Text>

            {/* OK Cancel Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress = {() =>{resetTimer();}}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  toggleUserPin();
                }}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* User Pin Input */}
      <Modal visible={showModalInput} animationType="fade" transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>ENTER YOUR PIN</Text>

            {/* CIRCLE INDICATOR */}
            <View style={{ flexDirection: 'row' }}>
              {activeIndicators.map((indicator, index) => (
                <View key={index} style={[styles.circleIndicator, { backgroundColor: indicator ? COLORS.primary : COLORS.white }]} />
              ))}
            </View>
             {/* Numbers */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.pinNumber}
              onPress={() => handleButtonPress('1')}>
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinNumber} onPress={() => handleButtonPress('2')} >
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinNumber} onPress={() => handleButtonPress('3')}>
                <Text>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.pinNumber} onPress={() => handleButtonPress('4')}>
                <Text>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinNumber}>
                <Text>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinNumber}>
                <Text>6</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.pinNumber}>
                <Text>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinNumber}>
                <Text>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinNumber}>
                <Text>9</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.pinNumber}>
                <Text>0</Text>
              </TouchableOpacity>
            </View>

            {/* OK Cancel Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}  onPress = {() =>{resetTimer();}}>Cancel</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
      
      {/* INCORRECT PIN POPUP */}

      <Modal visible={showIncorrectPin} animationType="fade" transparent>
        <View style={styles.modal}>
          <View style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingVertical: 30,
              paddingHorizontal: 50,
              alignItems: 'center',
              justifyContent: 'center'}}>
            <MaterialCommunityIcons name='alert-octagon' size={80} color={COLORS.secondary}/>
            <Text style={{fontSize: 20, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', textAlign: 'center'}}>
              PLEASE TRY AGAIN!
            </Text>
          </View>
          <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  resetTimer();
                  setShowIncorrectPin(false);
                }}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
        </View>
      </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: (SIZES.height * 0.80),
    },

    circleIndicator: {
        borderRadius: 30,
        width: 20,
        height: 20, 
        borderWidth: 1,
        borderColor: COLORS.primary,
        marginBottom: 10,
        margin: 7,
      },
    
      pinNumber: {
        borderColor: COLORS.primary,
        width: 65,
        height: 65,
        borderRadius: 35 ,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 10,
      },
      modal: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 30,
      },
      modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      modalText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        ...FONTS.h2,
      },
      countdownText: {
        fontWeight: 'bold',
        marginBottom: 20,
        color: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 100,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
    
      },
    
      circleButton: {
        borderRadius: 250,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        color:COLORS.white,
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      button: {
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        width: '40%',
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
      },
      buttonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
      },
})

export default PowerButton

