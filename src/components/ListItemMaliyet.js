import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../ortak';
let sonuc = 0.0;
export default class ListItemMaliyet extends Component {

hesapla(a, b, c) {
  sonuc = sonuc + a + b + c;
  return (a + b + c);
}

  render() {
const { tarlaAdi, urunAdi, urunCesidi, urunMaliyet, gubreCesitMaliyet, gubreTuruMaliyet } = this.props.tarla;
      return (
    <ScrollView>
    <Card >
    <CardSection>
    <Text>
    { tarlaAdi } - {urunAdi} - {urunCesidi}
    </Text>
    </CardSection>
    <CardSection>
    <Text>
Maliyet:{this.hesapla(parseFloat(gubreCesitMaliyet, 10),
  parseFloat(gubreTuruMaliyet, 10), parseFloat(urunMaliyet, 10)) }TL
    </Text>
    </CardSection>
    </Card>
    </ScrollView>
    )
    }
  }
