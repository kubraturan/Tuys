import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from '../ortak';


export default class profilForm extends Component {


  clickGirisSayfasi() {
    Actions.girisYap();
  }

  clickuyeOl() {
    Actions.uyeOl();
  }
    render() {
      return (
        <Card>
        <CardSection>
      <Button onPress={this.clickGirisSayfasi}> Giriş Yap </Button>


        </CardSection>

  <CardSection>
<Button onPress={this.clickuyeOl}> Üye Ol </Button>

  </CardSection>

  </Card>
    );
  }
}
