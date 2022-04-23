import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Input = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={{
          uri: 'https://getmeds.ph/blog/wp-content/uploads/2021/09/body-mass-index-1-1-1024x576.jpg',
        }}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: width / 1.5,
    height: 160,
  },
});

export default Input;
