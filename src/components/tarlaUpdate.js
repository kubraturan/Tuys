import React, { Component } from 'react';
import { 
  Text, 
  TextInput, 
  Picker, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import DatePicker from 'react-native-datepicker';

import { 
  Button, 
  Card, 
  CardSection, 
  Spinner } from '../ortak';

import { tarlalariDuzenle } from '../actions';

let PickerItem = Picker.Item;

class tarlaUpdate extends Component {
  state = {
    latitude: '',
    longitude: '',
    tarlaAdi: '',
    ekimTarihi: '',
    urunAdi: '',
    urunCesidi: '',
    urunMiktari: '',
    urunMiktariCinsi: '',
    urunMaliyet: '',
    tarimMetodu: '',
    gubreTuru: '',
    gubreTuruMaliyet: '',
    gubreCesidi: '',
    gubreCesitMaliyet: '',
    gubreMiktari: '',
    gubreMiktariCinsi: '',
    ekilecekAlanBoyutu: '',
    maliyetCinsiUrun: '',
    maliyetCinsiGubreCesidi: '',
    maliyetCinsiGubreTuru: '',
    alanCinsi: ''
  };

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
      latitude: this.props.tarlalar.latitude,
      longitude: this.props.tarlalar.longitude,
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
      alanCinsi 
    });
  }

  urunSelect(urun) {
    if (urun === 'Buğday') {
      return (
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.state.urunCesidi}
          onValueChange={urunCesidi => this.setState({ urunCesidi })}>
          <PickerItem label="Seçiniz" value="Seçiniz" />
          <PickerItem label="Kavuzlu Buğday" value="Kavuzlu Buğday" />
          <PickerItem label="Siyez" value="Siyez" />
          <PickerItem label="Makarnalık Buğday" value="Makarnalık Buğday" />
          <PickerItem label="Ekmeklik" value="Ekmeklik" />
          <PickerItem label="Horason Buğdayı" value="Horason Buğdayı" />
          <PickerItem label="Gemlik" value="Gemlik" />
          <PickerItem label="İngiliz Buğdayı" value="İngiliz Buğdayı" />
          <PickerItem label="Polonya Buğdayı" value="Polonya Buğdayı" />
        </Picker>
      );
    } 
    else if (urun === 'Arpa') {
      return (
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.state.urunCesidi}
          onValueChange={urunCesidi => this.setState({ urunCesidi })}>
          <PickerItem label="Seçiniz" value="Seçiniz" />
          <PickerItem label="Beyşehir 98" value="Beyşehir 98" />
          <PickerItem label="Tarm 98" value="Tarm 98" />
          <PickerItem label="Konevi 98" value="Konevi 98" />
          <PickerItem label="Larende" value="Larende" />
          <PickerItem label="Karatay 94" value="Karatay 94" />
          <PickerItem label="Kıral 97" value="Kıral 97" />
        </Picker>
      );
    }
  }

  gubreCesidiSelect(urun) {
    if (urun === 'Buğday') {
      return (
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.state.gubreCesidi}
          onValueChange={gubreCesidi => this.setState({ gubreCesidi })}>
          <PickerItem label="Seçiniz" value="Seçiniz" />
          <PickerItem label="Gübre Buğday" value="gübrebugday" />
          <PickerItem label="GB" value="gb" />
        </Picker>
      );
    } 
    else if (urun === 'Arpa') {
      return (
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.state.gubreCesidi}
          onValueChange={gubreCesidi => this.setState({ gubreCesidi })}>
          <PickerItem label="Seçiniz" value="Seçiniz" />
          <PickerItem label="Gübre Arpa" value="gübrearpa" />
          <PickerItem label="ga" value="ga" />
        </Picker>
      );
    }
  }

  clickUpdate() {
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
      alanCinsi
    } = this.state;

    this.props.tarlalariDuzenle({
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
      alanCinsi,
      uid: this.props.tarlalar.uid });
    }

  renderButton() {
    if (!this.props.loadingUpdate) {
      return (
        <TouchableOpacity 
          onPress={this.clickUpdate.bind(this)} 
          style={styles.buttonStyle}>
          <Text style={styles.textStyleCins}>Güncelle </Text>
      </TouchableOpacity>);
    }
      return <Spinner size="small" />;
  }

  render() {
    return (
        <ScrollView>
          <Card>
            <CardSection>
              <Image source={require('../images/tarlaAdi.png')}/>
              <TextInput
                style={styles.textStyle}
                placeholder={'Tarla Adi'}
                selectedValue={this.state.tarlaAdi}
                onChangeText={tarlaAdi => this.setState({ tarlaAdi })}
                value={this.state.tarlaAdi} />
            </CardSection>
            <CardSection>
              <DatePicker
                style={{ flex: 1, width: 200, color: '#fff' }}
                date={this.state.ekimTarihi}
                mode="date"
                spaceholder="Tarih Giriniz"
                format="DD-MM-YYYY"
                minDate="01-01-2001"
                maxDate="31-12-2098"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    flex: 1,
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                    },
                    dateInput: {
                    marginLeft: 99
                  }
                }}
              onDateChange={(ekimTarihi) => { this.setState({ date: ekimTarihi })}}/>
            </CardSection>
            <CardSection>
              <Image source={require('../images/urunAdi.png')}/>
              <Picker
                style={styles.textStyle}
                selectedValue={this.state.urunAdi}
                onValueChange={urunAdi => this.setState({ urunAdi })}>
                <PickerItem 
                  label=" Ekilecek Ürün Giriniz" 
                  value=" Ekilecek Ürün Giriniz" />
                <PickerItem 
                  label="Arpa" 
                  value="Arpa" />
                <PickerItem 
                  label="Buğday" 
                  value="Buğday" />
              </Picker>
            </CardSection>
            <CardSection>
              <Image source={require('../images/urunCesidi.png')}/>
              <Text style={styles.textStyle}>Ekilecek Ürün Çeşidi</Text>
                {this.urunSelect(this.state.urunAdi)}
            </CardSection>
            <CardSection>
              <Image source={require('../images/gubreCesidi.png')}/>
              <Text style={styles.textStyle}>Gübre Çeşidi</Text>
                {this.gubreCesidiSelect(this.state.urunAdi)}
            </CardSection>
            <CardSection>
              <Image source={require('../images/gubreTuru.png')}/>
              <Picker
                style={styles.textStyle}
                selectedValue={this.state.gubreTuru}
                onValueChange={gubreTuru =>
                  this.setState({ gubreTuru })}>
                <PickerItem 
                  label=" Gübre Türü Seçiniz" 
                  value=" Gübre Türü Seçiniz" />
                <Picker.Item 
                  label="Hayvan"
                  value="Hayvan" />
                <Picker.Item 
                  label="Yeşil Gübre"
                  value="Yeşil Gübre" />
                <Picker.Item 
                  label="Kemik Unu"
                  value="Kemik Unu" />
                <Picker.Item 
                  label="Kan Tozu"
                  value="Kan Tozu" />
                <Picker.Item 
                  label="Boynuz"
                  value="Boynuz" />
                <Picker.Item 
                  label="Tırnak Tozu"
                  value="Tırnak Tozu" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/tarimTipi.png')}/>
            <Picker
              style={styles.textStyle}
              selectedValue={this.state.tarimMetodu}
              onValueChange={tarimMetodu => this.setState({ tarimMetodu })}>
              <PickerItem 
                label=" Tarım Metodu Seçiniz" 
                value="Tarım Metodu Seçiniz" />
              <Picker.Item 
                label="İntansif (Modern-Yoğun) Tarım"
                value="intansif (Modern-Yoğun) Tarım" />
              <Picker.Item 
                label="Ekstansif (ilkel-Kaba-Yaygın) Tarım"
                value="Ekstansif (ilkel-Kaba-Yaygın) Tarım" />
              <Picker.Item 
                label="Plantasyon Tarım"
                value="Plantasyon Tarım" />
              <Picker.Item 
                label="Nadas Tarım"
                value="Nadas Tarım" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/miktar.png')}/>
            <TextInput
              style={styles.textStyle}
              placeholder={'Ürün Miktarı'}
              selectedValue={this.state.urunMiktari}
              onChangeText={urunMiktari => this.setState({ urunMiktari })}
              value={this.state.urunMiktari}/>
            <Picker
              style={styles.textStyle}
              selectedValue={this.state.urunMiktariCinsi}
              onValueChange={urunMiktariCinsi => this.setState({ urunMiktariCinsi })}>
              <PickerItem label="Cinsi" value="Cinsi" />
              <PickerItem label="kg" value="kg" />
              <PickerItem label="ton" value="ton" />
              <PickerItem label="teneke" value="teneke" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/miktar.png')}/>
            <TextInput
              style={styles.textStyle}
              placeholder={'Gübre Miktarı'}
              onChangeText={gubreMiktari =>
                this.setState({ gubreMiktari })}
              value={this.state.gubreMiktari}/>
            <Picker
              style={styles.textStyle}
              selectedValue={this.state.gubreMiktariCinsi}
              onValueChange={gubreMiktariCinsi => this.setState({ gubreMiktariCinsi })}>
              <PickerItem label="Cinsi" value="Cinsi" />
              <PickerItem label="kg" value="kg" />
              <PickerItem label="ton" value="ton" />
              <PickerItem label="teneke" value="teneke" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/toplamMaliyet.png')}/>
            <TextInput
              style={styles.textStyle}
              placeholder={'Ürün Maliyeti'}
              selectedValue={this.state.urunMaliyet}
              onChangeText={urunMaliyet => this.setState({ urunMaliyet })}
              value={this.state.urunMaliyet} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.state.maliyetCinsiUrun}
              onValueChange={maliyetCinsiUrun => this.setState({ maliyetCinsiUrun })}>
              <PickerItem 
                label="Birim" 
                value="Birim" />
              <PickerItem 
                label="tl" 
                value="tl" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreCesidi.png')}/>
            <TextInput
              style={styles.textStyle}
              placeholder={'Gübre Çeşidi Maliyet'}
              selectedValue={this.state.gubreCesitMaliyet}
              onChangeText={gubreCesitMaliyet => this.setState({ gubreCesitMaliyet })}
              value={this.state.gubreCesitMaliyet} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.state.maliyetCinsiGubreCesidi}
              onValueChange={maliyetCinsiGubreCesidi => this.setState({ maliyetCinsiGubreCesidi })}>
              <PickerItem 
                label="Birim" 
                value="Birim" />
              <PickerItem 
                label="tl" 
                value="tl" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreTuru.png')}/>
            <TextInput
              style={styles.textStyle}
              placeholder={'Gübre Çeşidi Maliyet'}
              selectedValue={this.state.gubreTuruMaliyet}
              onChangeText={gubreTuruMaliyet => this.setState({ gubreTuruMaliyet })}
              value={this.state.gubreTuruMaliyet} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.state.maliyetCinsiGubreTuru}
              onValueChange={maliyetCinsiGubreTuru => this.setState({ maliyetCinsiGubreTuru })}>
              <PickerItem label="Birim" value="Birim" />
              <PickerItem label="tl" value="tl" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/ekildigiAlan.png')}/>
            <TextInput
              style={styles.textStyle}
              placeholder={'Gübre Çeşidi Maliyet'}
              selectedValue={this.state.ekilecekAlanBoyutu}
              onChangeText={ekilecekAlanBoyutu => this.setState({ ekilecekAlanBoyutu })}
              value={this.state.ekilecekAlanBoyutu} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.state.alanCinsi}
              onValueChange={alanCinsi => this.setState({ alanCinsi })}>
              <PickerItem label="Alan" value="Alan" />
              <PickerItem label="Dönüm" value="Dönüm" />
            </Picker>
          </CardSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textStyleCins: {
    flex: 1,
    alignSelf: 'center',
    color: '#085d29',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex:1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff95',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  } 
});

const mapToStateProps = ({ tarlaUpdateResponse }) => {
  const { loadingUpdate } = tarlaUpdateResponse;
  return {loadingUpdate };
};

export default connect(mapToStateProps,{ tarlalariDuzenle })(TarlaUpdate);
