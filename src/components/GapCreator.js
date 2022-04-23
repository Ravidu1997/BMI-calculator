import React from 'react';
import {View, StyleSheet} from 'react-native';

const Input = ({height}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={{height: height}} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 50,
    marginTop: 20,
  },
});

export default Input;
