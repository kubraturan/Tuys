import React, { Component } from 'react';

import { 
  Text, 
  ScrollView, 
  StyleSheet, 
  View, 
  Image } from 'react-native';

import { connect } from 'react-redux';

import moment from 'moment';

import { CardSection } from '../ortak';

import { tarlalariDuzenle } from '../actions';

class tarlaBilgisiGoruntule extends Component {

  componentWillMount() {
    const {
      latitude,
      longitude,
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
      maliyetCinsiUrun,
      maliyetCinsiGubreCesidi,
      maliyetCinsiGubreTuru,
      alanCinsi } = this.props.tarlalar;

    this.setState({
      latitude,
      longitude,
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
      maliyetCinsiUrun,
      maliyetCinsiGubreCesidi,
      maliyetCinsiGubreTuru,
      alanCinsi });
  }
  render() {
    //bugunun gun bilgisini diziye at
    const bugununTarihi = [];
    const ekiminTarihi = [];
    moment().format('DD');
    bugununTarihi.push(
      parseFloat(moment().format('YYYY')),
      parseFloat(moment().format('MM')),
      parseFloat(moment().format('DD'))
    );
    console.log(bt);

    moment().format('DD');
    ekiminTarihi.push(
      parseFloat(moment(this.state.ekimTarihi, "DD/MM/YYYY").format('YYYY')),
      parseFloat(moment(this.state.ekimTarihi, "DD/MM/YYYY").format('MM')),
      parseFloat(moment(this.state.ekimTarihi, "DD/MM/YYYY").format('DD'))
    );
    const bt = moment(bugununTarihi);
    const et = moment(ekiminTarihi);
    console.log(et);
    //ektiğin günden geçen zaman
    console.log((bt).diff(et, 'days'));
    return (
      <ScrollView>
        <View>
          <CardSection>
            <Image source={require('../images/tarlaAdi.png')}/>
            <Text style={styles.TextStyle}>Tarla Adı:</Text>
            <Text style={styles.TextStyle}>{this.state.tarlaAdi}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/ekimTarihi.png')}/>
            <Text style={styles.TextStyle}>Ekim Tarihi:</Text>
            <Text style={styles.TextStyle}>{this.state.ekimTarihi}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gecenZaman.png')}/>
            <Text style={styles.TextStyle}>Geçen Süre:</Text>
            <Text style={styles.TextStyle}>{bt.diff(et, 'days')} Gün</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/urunAdi.png')}/>
            <Text style={styles.TextStyle}>Ürün Adı:</Text>
            <Text style={styles.TextStyle}>{this.state.urunAdi}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/urunCesidi.png')}/>
            <Text style={styles.TextStyle}>Ürün Çeşidi:</Text>
            <Text style={styles.TextStyle}>{this.state.urunCesidi}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreTuru.png')}/>
            <Text style={styles.TextStyle}>Gübre Türü:</Text>
            <Text style={styles.TextStyle}>{this.state.gubreTuru}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreCesidi.png')}/>
            <Text style={styles.TextStyle}>Gübre  Çeşidi:</Text>
            <Text style={styles.TextStyle}>{this.state.gubreCesidi}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/tarimTipi.png')}/>
            <Text style={styles.TextStyle}>Tarım Tipi:</Text>
            <Text style={styles.TextStyle}>{this.state.tarimMetodu}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/miktar.png')}/>
            <Text style={styles.TextStyle}>Ürün Miktarı :</Text>
            <Text style={styles.TextStyle}>{this.state.urunMiktari} {this.state.urunMiktariCinsi}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/miktar.png')}/>
            <Text style={styles.TextStyle}>Gübre Miktarı:</Text>
            <Text style={styles.TextStyle}>{this.state.gubreMiktari} {this.state.gubreMiktariCinsi}</Text>
          </CardSection>
          <CardSection>
            <Image source={require('../images/ekildigiAlan.png')}/>
            <Text style={styles.TextStyle}>Ekilecek Alan Boyutu:</Text>
            <Text style={styles.TextStyle}>{this.state.ekilecekAlanBoyutu} {this.state.alanCinsi}</Text>
          </CardSection>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  TextStyle: {
    flex: 1,
    alignSelf: 'stretch',
    color: '#ffffff',
    fontSize: 17,
    paddingLeft: 5,
    fontWeight: '600',
    flexDirection: 'row',
    position: 'relative'
  }
});

const mapToStateProps = ({ tarlaUpdateResponse }) => {
  const { loadingUpdate } = tarlaUpdateResponse;
  return {
    loadingUpdate };
  };
export default connect(mapToStateProps, {tarlalariDuzenle })(TarlaUpdate);
