import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {  Card, CardSection, Spinner } from '../ortak';
import { tarlaDelete } from '../actions';

class tarlaDelete extends Component {
  constructor(props) {
    super(props);
    state = { 
      tarlaAdi: '',
      ekimTarihi: '',
      urunAdi: '',
      urunCesidi: '',
      urunMiktari: '',
      urunMiktariCinsi: '',
      urunMaliyet: '',
      gubreTuru: '',
      gubreTuruMaliyet: '',
      gubreCesidi: '',
      gubreCesitMaliyet: '',
      gubreMiktari: '',
      gubreMiktariCinsi: '',
      tarimMetodu: '',
      ekilecekAlanBoyutu: '',
      maliyetCinsi: ''
    }; 
  }

  componentWillMount() {
    const { 
      tarlaAdi,
      ekimTarihi,
      urunAdi,
      urunCesidi,
      urunMiktari,
      urunMiktariCinsi,
      urunMaliyet,
      gubreTuru,
      gubreTuruMaliyet,
      gubreCesidi,
      gubreCesitMaliyet,
      gubreMiktari,
      gubreMiktariCinsi,
      tarimMetodu,
      ekilecekAlanBoyutu,
      maliyetCinsi } = this.props.tarlalar;

    this.setState({ 
      tarlaAdi,
      ekimTarihi,
      urunAdi,
      urunCesidi,
      urunMiktari,
      urunMiktariCinsi,
      urunMaliyet,
      gubreTuru,
      gubreTuruMaliyet,
      gubreCesidi,
      gubreCesitMaliyet,
      gubreMiktari,
      gubreMiktariCinsi,
      tarimMetodu,
      ekilecekAlanBoyutu,
      maliyetCinsi 
    });
  }

  clickDelete() {
    this.props.tarlaDelete({ uid: this.props.tarlalar.uid });
  }

  renderDeleteButton() {
    if (!this.props.loadingDelete) {
      return (
        <TouchableOpacity onPress={this.clickDelete.bind(this)} style={styles.buttonStyle}>
          <Text style={styles.TextStyleCins}>Sil </Text>
        </TouchableOpacity>
      );
    }
      return <Spinner size="small"/>;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderDeleteButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'stretch',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  TextStyleCins: {
    alignSelf: 'stretch',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop:5,
    marginLeft: 35,
    marginRight: 35,
    position: 'relative'
  },
  buttonStyle: {
    backgroundColor: '#f00',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f00',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 50,
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  }
});
const mapToStateProps = ({ TarlaDeleteResponse }) => {
  const { loadingDelete } = TarlaDeleteResponse;
  return loadingDelete
};

export default connect(mapToStateProps, { tarlaDelete })(TarlaDelete);
