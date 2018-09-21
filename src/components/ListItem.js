import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  ogrenciClick() {
    Alert.alert(
      '',
      'Bir işlem seçiniz!',
      [
        { 
          text: 'Görüntüle',
          onPress: () => Actions.tarlagoruntule({ tarlalar: this.props.tarla}) 
        },
        { 
          text: 'Düzenle',
          onPress: () => Actions.tarlaupdate({ tarlalar: this.props.tarla })},
        { 
          text: 'Sil', 
          onPress: () => Actions.tarladelete({ tarlalar: this.props.tarla })},
      ],
        { 
          cancelable: false
        }
    );
  }

  render() {
    const {tarlaAdi, urunAdi, urunCesidi} = this.props.tarla;

    if (urunAdi === 'Buğday') {
      return (
        <ScrollView>
          <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
            <View>
              <View style={styles.ViewStyleBugday}>
                <Text style={styles.TextStyle}>
                    {tarlaAdi} -
                </Text>
                <Text style={styles.TextStyle}>
                    {urunAdi} {urunCesidi}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
          <View>
            <View style={styles.ViewStyleArpa}>
              <Text style={styles.TextStyle}>
                { tarlaAdi } -
              </Text>
              <Text style={styles.TextStyle}>
                { urunAdi } {urunCesidi}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  TextStyle: {
    alignSelf: 'stretch',
    color: '#636564',
    fontSize:17,
    fontWeight: '600',
    position: 'relative'
  },
  ViewStyleArpa: {
    backgroundColor: '#9ebc3899',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#636564',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight:50,
    marginTop:5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  ViewStyleBugday: {
    backgroundColor: '#cfab7795',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#636564',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight:50,
    marginTop:5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  }
});
export default ListItem;
