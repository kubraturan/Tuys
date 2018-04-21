import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import { tarlalarListData } from '../actions';

var { height, width } = Dimensions.get('window');


class TarlalarList extends Component {

  componentWillMount() {
    this.props.tarlalarListData();
    this.createDataSource(this.props);

    const { urunAdi } = this.props.tarlaArray;
    this.state = {
      markers: [
      this.props.tarlaArray
      ] };


}
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ tarlaArray }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(tarlaArray);

  }

  render() {

const { tarlaAdi, latitude, longitude } = this.props;
    const markerler = [this.props.tarlaArray];

console.log(markerler);
    if (markerler.length === 0) {
      return (
        <View style={styles.container}>
      <Text>Tarlalar Yükleniyor...</Text>
        </View>
      )
    } else {
      return (

        <View style={styles.container}>
        <Text>Tarlalar Yükleniyor...</Text>
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
          markerler['0'].map((marker, i) => (
            <MapView.Marker
               key={i}
              coordinate={{
               latitude: Number(markerler['0'][i].latitude),
                   longitude: Number(markerler['0'][i].longitude) }}
                   title={markerler['0'][i].tarlaAdi}
              description={markerler['0'][i].description}
            />
          ))}
          </MapView>
        </View>
      );
    }
  }
}

const mapStateToProps = ({ tarlaDataResponse }) => {
  const tarlaArray = _.map(tarlaDataResponse, (val, uid) => {
    return { ...val, uid };
  });
  return { tarlaArray };
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
    height: height*2/3
  }
});


export default connect(mapStateToProps, { tarlalarListData })(TarlalarList);
