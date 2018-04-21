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

    const {urunAdi } = this.props.tarlaArray;
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
    const markerler = [];
    markerler.push(
      this.props.tarlaArray
    );
      console.log(this.state.markers);

    if (markerler['0'].length === 0) {
      console.log('ife geldi');
      console.log(markerler);
    } else {
        console.log('else geldi');
        console.log(markerler);
      console.log(markerler['0']['2'].tarlaAdi);
    }

     return (
       <View style={styles.container}>


                    <Text>

                    title: {'marker.tarlaAdi'},

                    </Text>



       </View>
     );
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
