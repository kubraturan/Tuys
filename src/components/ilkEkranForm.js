import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

var { height, width } = Dimensions.get('window');

export default class BackgroundImage extends Component {
  
  clickGirisSayfasi() {
    Actions.girisYap();
  }

  clickuyeOl() {
    Actions.uyeOl();
  }

  render() {
    const {buttonStyle, textStyle} = styles;
    return (
      <ImageBackground 
          source={require('../images/ilkEkranArkaPlan.jpg')}
          style={styles.backgroundImage} >
        <View style={{flex:1 ,marginTop: height:3}}>
          <TouchableOpacity 
            onPress={this.clickGirisSayfasi} 
            style={buttonStyle}>
            <Text style={textStyle}> Giriş Yap </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.clickuyeOl} 
            style={buttonStyle}>
            <Text style={textStyle}> Üye Ol </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    //  flex: 1,
    width: width,
    height: height,
    //resizeMode: 'cover'
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
    marginLeft: 50,
    marginRight: 50,
    shadowOffset: {width:5, height:2 },
    shadowOpacity:5,
    //  flexDirection: 'row',
    position: 'relative'
  }
});
