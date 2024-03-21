import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import TopMenuBar from '../../components/TopMenuBar';
import MapView from 'react-native-maps';

import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';
import ServiceCard from '../../components/ServiceCard';
import {ServiceData} from '../../assets/Data.js/MenuData';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* top menu */}
      {/* map integration */}
      <View
        style={{
          position: 'absolute',
          top: 100,
          left: 50,
          backgroundColor: 'red',
        }}
      />
      <TopMenuBar />
      {/* main features */}
      <View style={styles.features}>
        <View style={styles.just_bar} />
        <View style={styles.search_bg}>
          <View style={styles.search}>
            <MagnifyingGlassIcon color={'gray'} />
            <Text style={styles.search_text}>Where are you going?</Text>
          </View>
        </View>
        <View style={styles.explore}>
          <Text style={styles.explore_text}>Explore</Text>
          <TouchableOpacity style={styles.see_all_btn}>
            <Text style={styles.see_all}>See all</Text>
            <ChevronRightIcon color={'gray'} size={15} />
          </TouchableOpacity>
        </View>
        {/* services */}
        <View style={styles.services}>
          <FlatList
            data={ServiceData}
            renderItem={({item}) => <ServiceCard data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Image
          style={styles.bgimage}
          source={{
            uri: 'https://www.shutterstock.com/image-vector/motorway-cars-template-design-sketch-600nw-1762038689.jpg',
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
