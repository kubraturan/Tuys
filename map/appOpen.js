import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import MapView from 'react-native-maps';
var {height, width} = Dimensions.get('window');

class GeolocationExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 39.7496655,
        longitude: 36.9684362,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
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
      },
      (error) => this.setState({ error: Alert.alert('deneme') }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
}

onLongPress(location) {
    console.log(location);
   Alert.alert(location);
    }
  onMapPress(e) {
    Alert.alert(
      'Mesaj',
      'Tarla Eklensin mi?',
      [

        { text: 'Tamam', onPress: () => null }

      ]

    );
/*var a = e.nativeEvent.coordinate.latitude;
        Alert.alert(a.toString());//returns a number
        }
*/
}
  render() {
    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        onLongPress={this.onMapPress.bind(this)}
        >
        <MapView.Marker
           coordinate={{ latitude: this.state.region.latitude,
             longitude: this.state.region.longitude }}
           title="Victory Monument"
           description="A large military monument in Bangkok, Thailand."
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
