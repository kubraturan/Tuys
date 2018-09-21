import React, { Component } from 'react';
import { 
  Text, 
  StyleSheet, 
  Dimensions, 
  ImageBackground, 
  View, 
  TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { 
  Button, 
  Card, 
  CardSection } from '../ortak';

var { height, width } = Dimensions.get('window');

export default class profilForm extends Component {
  
  clickTarlalarimMap() {
    Actions.mapMarkerList();
  }

  clickTarlalarim() {
    Actions.tarlaList();
  }

  clickTarlaEkle() {
    Actions.konumEkleMap();
  }
  clickToplamMaliyet() {
    Actions.tarlaListMaliyet();
  }

  render() {
    const { buttonStyle, textStyle } = styles;
    return (
      <ImageBackground 
        source={require('../images/profilSayfasi.jpg')}
        style={styles.backgroundImage} >
        <View 
          style={{flex:1, marginTop:height/3}}>
          <TouchableOpacity 
            onPress={this.clickTarlaEkle} 
            style={[buttonStyle, {backgroundColor:'#cfab7795'}]}>
            <Text style={textStyle}> Tarla Ekle </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.clickTarlalarim}
            style={[buttonStyle, {backgroundColor:'#9ebc3899'}]}>
            <Text style={textStyle}> Tarlalarım </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.clickTarlalarimMap} 
            style={[buttonStyle, {backgroundColor:'#594c4495'}]}>
            <Text style={textStyle}> Haritada Tarlalarım </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.clickToplamMaliyet} 
            style={[buttonStyle, {backgroundColor:'#680f2b95'}]}>
            <Text style={textStyle}> Toplam Maliyet </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.clickuyeOl}
            style={[buttonStyle, {backgroundColor:'#9dcff495'}]}>
            <Text style={textStyle}> Hava Durumu </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={[buttonStyle, {backgroundColor:'#ff000095'}]}>
            <Text style={textStyle}> Çıkış Yap </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#63656490',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#636564',
    marginTop:5,
    marginLeft: 40,
    marginRight: 40,
    shadowOffset: {width:5, height:2 },
    shadowOpacity:5,
    position: 'relative'
  }
});
