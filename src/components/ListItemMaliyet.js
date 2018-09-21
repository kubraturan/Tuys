import React, { Component } from 'react';

import { 
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
  ScrollView 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Card, CardSection } from '../ortak';

let sonuc = 0.0;

export default class ListItemMaliyet extends Component {

  hesapla(a, b, c) {
    sonuc = sonuc + a + b + c;
    return (a + b + c);
  }

  render() {
    const { 
      tarlaAdi,
      urunAdi, 
      urunCesidi, 
      urunMaliyet, 
      gubreCesitMaliyet, 
      gubreTuruMaliyet} = this.props.tarla;

    return (
      <ScrollView>
        <View style={styles.CardStyle}>
          <View style={styles.CardSectionStyle}>
            <Text style={styles.TextStyle}>
              { tarlaAdi } - {urunAdi} - {urunCesidi}
            </Text>
          </View>
          <View style={styles.CardSectionStyle}>
            <Text style={styles.TextStyle}>
              Maliyet:{this.hesapla(parseFloat(gubreCesitMaliyet, 10),
              parseFloat(gubreTuruMaliyet, 10), parseFloat(urunMaliyet, 10)) } TL
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  CardStyle: {
    flex:1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ffffff95',
    borderBottomWidth: 0,
    shadowColor: '#ffffff95',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  CardSectionStyle: {
    borderBottomWidth: 1,
    padding:15,
    color:'#fff',
    backgroundColor:'#680f2b95',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative'
  },
  TextStyle: {
    flex:1,
    alignSelf: 'stretch',
    color: '#ffffff',
    fontSize:17,
    fontWeight: '600',
    flexDirection: 'row',
    position: 'relative'
  }
};
