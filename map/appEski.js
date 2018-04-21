import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TextInput, Text, View, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';
import { Card, CardSection } from '../ortak';

export default class l9_map extends Component {
   render() {
      const { tarlaAdi, latitude, longitude } = this.props.tarla;
        this.state = {
      markers: [
        { latlng:
           { latitude: parseFloat(this.props.tarla.latitude),
             longitude: parseFloat(this.props.tarla.longitude) },
          title: tarlaAdi,
          description: "A large military monument in Bangkok, Thailand." },
      ] };
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
          {this.state.markers.map((marker,i) => (
            <MapView.Marker
              key={i}
              coordinate={ {
                latlng : { latitude: parseFloat(this.props.tarla.latitude),
                   longitude: parseFloat(this.props.tarla.longitude) }}
              title={marker.title}
              description={marker.description}}
            />
          ))}
          </MapView>
        </View>
      );
}
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map:{
    width: width,
    height: height*1/4
  }
});
