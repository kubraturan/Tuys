import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
var {height, width} = Dimensions.get('window');

class GeolocationExample extends Component {

  constructor(props) {
    super(props);
    this.state = {

      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,

      }
    };

  }

  componentWillMount() {
     navigator.geolocation.getCurrentPosition(
      (position) => {
            this.setState({
          region: {

            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
            error: null,
          }

        });
            console.log(position.coords.latitude);
      },
      (error) => this.setState({ error: Alert.alert('deneme')
    }),
      console.log('error'),
      { enableHighAccuracy: true, timeout: 50000, maximumAge: 1000 },
    );
}

/*onLongPress(location) {
    console.log(location);
   Alert.alert(location);
 }*/
  onMapPress(e) {
    var konumLatitude = e.nativeEvent.coordinate.latitude;
    var konumLongitude = e.nativeEvent.coordinate.longitude;
  Alert.alert(
      'Tarla',
      'Tarla Eklensin mi?',
      [
    { text: 'Tarla Ekle',
     onPress: () => Actions.TarlaEkleForm({ latitude: konumLatitude.toString(), longitude: konumLongitude.toString() })
    },
        { text: 'Yeni Konum Seç', onPress: () => null },

      ]

    );
        }

  render() {
    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        region={this.state.region}
      //  onRegionChange={this.onRegionChange}
     onLongPress={this.onMapPress}
        >
        <MapView.Marker
           coordinate={{ latitude: this.state.region.latitude,
             longitude: this.state.region.longitude }}
           title="evim"
           description="Evim."
        />
        </MapView>
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
  map: {
    width: width,
    height: height
  }
});
export default GeolocationExample;
