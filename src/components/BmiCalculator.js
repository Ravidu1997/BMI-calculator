import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const BmiCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiValue, setBmiValue] = useState(0);
  const [health, setHealth] = useState('');
  const [valuesNotSelected, setValuesNotSelected] = useState(false);
  const [displayHealthCard, setDisplayHealthCard] = useState(false);
  const [healthCardVisible, setHealthCardVisible] = useState(false);

  const handleButtonPress = () => {
    let bmiValue = Math.round(weight / (height * height), 2);
    setBmiValue(bmiValue);
    console.log(bmiValue);
    if (!height || !weight) {
      setValuesNotSelected(true);
      setHealth('');
      setBmiValue('');
      return;
    } else {
      setValuesNotSelected(false);
    }
    setHealthCardVisible(true);

    if (bmiValue < 18.5) setHealth('Underweight');
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) setHealth('Normal');
    else if (bmiValue >= 25 && bmiValue <= 29.9) setHealth('Overweight');
    else setHealth('Obese');
  };

  const handleHealthCardButtonPress = () => {
    setDisplayHealthCard(true);
  };

  return (
    <View style={styles.containerStyle}>
      <TextInput
        onChangeText={value => setWeight(value)}
        style={styles.textInputStyle}
        keyboardType="numeric"
        placeholder="Enter your weight (in Kgs)"
      />

      <TextInput
        style={styles.textInputStyle}
        onChangeText={value => setHeight(value)}
        keyboardType="numeric"
        placeholder="Enter your height (in meters)"
      />

      <TouchableOpacity style={styles.buttonStyle}>
        <Button
          onPress={handleButtonPress}
          color="#4a03fc"
          fontSize={50}
          title="Calculate"
        />
      </TouchableOpacity>

      <Text style={styles.errorTextStyle}>
        {valuesNotSelected ? `Please enter your values` : ''}
      </Text>
      {/* <Text>{bmiValue ? `BMI Value: ${bmiValue}`: ''}</Text> */}
      <Text>
        {displayHealthCard ? (
          <Button
            onPress={handleHealthCardButtonPress}
            color="teal"
            title="See Health Card"
          />
        ) : (
          ''
        )}
      </Text>

      <Text>
        {healthCardVisible ? (
          <View>
            <TouchableOpacity style={styles.healthCardStyle}>
              <Text style={styles.healthCardText}>
                Health Card{'\n\n\n'}
                BMI : {bmiValue}
                {'\n'}
                Health : {health}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          ''
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },
  textInputStyle: {
    fontSize: 20,
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
    borderColor: 'grey',
    borderWidth: 0.2,
    borderRadius: 5,
  },
  buttonStyle: {
    fontSize: 50,
  },
  healthCardStyle: {
    left: 60,
    borderRadius: 6,
    elevation: 20,
    backgroundColor: '#e3dadb',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  healthCardText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    color: '#fc1c3a',
  },
  errorTextStyle: {
    fontSize: 23,
    color: 'teal',
    marginLeft: 30,
  },
});

export default BmiCalculator;
