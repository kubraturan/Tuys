import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../ortak';

class ListItem extends Component {

  ogrenciClick() {
    Alert.alert(
      '',
      'Bir işlem seçiniz!',
      [
  { text: 'Görüntüle', onPress: () => Actions.tarlagoruntule({ tarlalar: this.props.tarla }) },
        { text: 'Düzenle', onPress: () => Actions.tarlaupdate({ tarlalar: this.props.tarla }) },
        { text: 'Sil', onPress: () => Actions.tarladelete({ tarlalar: this.props.tarla }) },
      ],
        { cancelable: false }

    );
  }

  render() {
    const { tarlaAdi, urunAdi, urunCesidi } = this.props.tarla;
    return (
      <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
      <View>
        <CardSection>
        <Text>
          { tarlaAdi } -
        </Text>
          <Text>
            { urunAdi } {urunCesidi}
          </Text>
        </CardSection>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
