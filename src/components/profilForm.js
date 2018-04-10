import React, { Component } from 'react';
import Text from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from '../ortak';


export default class profilForm extends Component {


  clickTarlalarim() {
    Actions.tarlaList();
  }

  clickTarlaEkle() {
    Actions.tarlaEkle();
  }
  clickToplamMaliyet() {
    Actions.tarlaListMaliyet();
}

    render() {
      return (
        <Card>
        <CardSection>
      <Button onPress={this.clickTarlalarim}> Tarlalarım </Button>


        </CardSection>

  <CardSection>
<Button onPress={this.clickTarlaEkle}> Tarla Ekle </Button>


  </CardSection>

  <CardSection>
<Button onPress={null}> Hava Durumu </Button>
  </CardSection>

  <CardSection>
<Button onPress={this.clickToplamMaliyet}> Toplam Maliyet </Button>


  </CardSection>

  </Card>
    );
  }
}
