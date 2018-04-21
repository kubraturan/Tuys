import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
var {height, width } = Dimensions.get('window');
import MapView from 'react-native-maps';

export default class l9_map extends Component {
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: 39.73902,
        longitude: 37.018568,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      markers:[
        {latlng: {latitude:  39.747203, longitude:  37.017195},
          title: "Victory Monument" , description: "A large military monument in Bangkok, Thailand."},
        {latlng: {latitude: 39.748847, longitude: 37.016849},
          title: "Saxophone Cub" , description: "A music pub for saxophone lover"},
        {latlng: {latitude: 39.764595, longitude: 37.537438},
          title: "Coco Depertment Store" , description: "Fashion Department Store"},
      ]
    };
//    this.onRegionChange = this.onRegionChange.bind(this);
  }

//  onRegionChange(region) {
//    this.setState({ region });
//  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={this.state.region}
      //    onRegionChange={this.onRegionChange}
        >
        {this.state.markers.map((marker,i) => (
          <MapView.Marker
            key={i}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
        </MapView>
        <View style={styles.container}>
          <Text>
          Latitude: {this.state.region.latitude}{'\n'}
          Longitude: {this.state.region.longitude}{'\n'}
          LatitudeDelta: {this.state.region.latitudeDelta}{'\n'}
          LongitudeDelta: {this.state.region.longitudeDelta}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map:{
    width: width,
    height: height
  }
});



















return (
  <View style={styles.container}>
    <MapView
     style={styles.map}
      region={{
          latitude: 39.73902,
          longitude: 37.018568,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
    >
{
  if (markerler['0'].length === 0) {
      <View>
      <Text>Tarla Yükleniyorr....</Text>
      </View>
    }
   else{
    markerler['0'].map((marker, i) => (
      <MapView.Marker
         key={i}
        coordinate={{
          latlng: { latitude: parseFloat(marker.latitude),
             longitude: parseFloat(marker.longitude) }}}
             title={marker.title}
        description={marker.description}
      />
    ))} }
    </MapView>
  </View>
);
