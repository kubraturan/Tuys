import React, {Component} from 'react';

import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions} from 'react-native';

import MapView from 'react-native-maps';

var {height, width} = Dimensions.get('window');

export default class mapMarkerTarlalarForm extends Component {
  constructor(props){
    super(props);
    const { tarlaAdi } = this.props.tarla;
    this.state = {
      renkler: ['kırmızı', 'yeşil', 'mavi']
    };
  }

  componentWillReceiveProps() {
    const markerler = [];
    markerler.push(this.props.tarla.tarlaAdi);
    console.log('markerler');
    console.log(markerler);
  }

  render() {
    var renkler = this.state.renkler;
    renkler.push(this.props.tarla.tarlaAdi);
//  this.setState({ renkler });
    return (
      <View style={styles.container}>
          <View style={styles.container}>
            <Text>
            title: {this.state.renkler},
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
  map: {
    width: width,
    height: height*2/3
  }
});
