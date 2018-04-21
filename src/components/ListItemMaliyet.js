import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../ortak';

const sonuc = 0;

export default class ListItemMaliyet extends Component {

hesapla(a, b, c) {

  sonuc = sonuc + a + b + c;
  return (a + b + c);
}

  render() {
const { tarlaAdi, urunAdi, urunCesidi, urunMaliyet, gubreCesitMaliyet, gubreTuruMaliyet, latitude , longitude } = this.props.tarla;

    return (
      <ScrollView>
  <Card >
        <CardSection>
        <Text>
          { tarlaAdi } - {urunAdi}- {urunCesidi}- {latitude}- {longitude}
  </Text>
  </CardSection>
  <CardSection>
            <Text>
Maliyet:{this.hesapla(parseInt(urunMaliyet, 10), parseInt(gubreCesitMaliyet, 10), parseInt(gubreTuruMaliyet, 10)) }
           TL
    </Text>
                    </CardSection>
      </Card>

          </ScrollView>


    );
  }
}
