import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

const Title = ({title}) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity>
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fc03e8',
    textAlign: 'center',
  },
  containerStyle: {
    marginTop: 20,
  },
});

export default Title;
