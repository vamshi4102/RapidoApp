import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Bars3Icon, HeartIcon} from 'react-native-heroicons/outline';
const TopMenuBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Bars3Icon color={'gray'} />
      </View>
      <TouchableOpacity style={styles.right}>
        <View style={styles.location_row}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Green_circle.png',
            }}
            style={styles.circle_image}
          />
          <Text style={styles.location}>Your Current Location</Text>
        </View>
        <HeartIcon color={'gray'} />
      </TouchableOpacity>
    </View>
  );
};

export default TopMenuBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  right: {
    height: 45,
    width: '84%',
    borderRadius: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  circle_image: {
    width: 15,
    height: 15,
  },
  location: {
    fontWeight: '600',
    marginLeft: 10,
  },
  location_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
