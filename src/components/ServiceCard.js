import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ServiceCard = ({data}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: data.image}} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    borderColor: '#cccc',
    borderWidth: 1,
    borderRadius: 10,
    width: 80,
    // height: 70,
    marginHorizontal:8,
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    width: 60,
    height: 60,
  },
  name: {
    fontWeight:'bold',
    marginBottom:5
  },
});
