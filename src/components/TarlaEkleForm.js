import React, { Component } from 'react';
import { Text, TextInput, Picker, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'
import { Button, Card, CardSection } from '../ortak';
import { tarlaEkleChanged, tarlaCreate } from '../actions';

const PickerItem = Picker.Item;

class TARLAEKLEFORM extends Component {
  clickSave() {
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
      alanCinsi } = this.props;

    if (
      tarlaAdi === null ||
      ekimTarihi === null ||
      urunAdi === null ||
      urunCesidi === 'Seçiniz' ||
      urunMiktari === null ||
      urunMiktariCinsi === 'Cinsi' ||
      urunMaliyet === null ||
      gubreTuru === null ||
      gubreTuruMaliyet === null ||
      gubreCesidi === 'Seçiniz' ||
      gubreCesitMaliyet === null ||
      gubreMiktari === null ||
      gubreMiktariCinsi === 'Cinsi' ||
      tarimMetodu === null ||
      ekilecekAlanBoyutu === null ||
      maliyetCinsiUrun === 'Birim' ||
      maliyetCinsiGubreCesidi === 'Birim' ||
      maliyetCinsiGubreTuru === 'Birim' ||
      alanCinsi === 'Birim') {
      Alert.alert(
        'Mesaj',
        'Boş Alanları Doldurunuz Lütfen...',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
    } 
    else {
      this.props.tarlaCreate({
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
  }

  urunSelect(urun) {
    if (urun === 'Buğday') {
        return (
          <Picker
            style={styles.textStyle}
            selectedValue={this.props.urunCesidi}
            onValueChange={urunCesidi =>
              this.props.tarlaEkleChanged({ props: 'urunCesidi', value: urunCesidi })}>
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
          style={styles.textStyle}
          selectedValue={this.props.urunCesidi}
          onValueChange={urunCesidi =>
          this.props.tarlaEkleChanged({ props: 'urunCesidi', value: urunCesidi })}>
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

    return (
      <Picker
        style={styles.textStyle}
        selectedValue={this.props.urunCesidi}
        onValueChange={urunCesidi =>
          this.props.tarlaEkleChanged({ props: 'urunCesidi', value: urunCesidi })}>
        <PickerItem label="" value="" />
      </Picker>
    );
  }

  gubreCesidiSelect(urun) {
    if (urun === 'Buğday') {
      return (
        <Picker
          style={styles.textStyle}
          selectedValue={this.props.gubreCesidi}
          onValueChange={gubreCesidi =>
            this.props.tarlaEkleChanged({ props: 'gubreCesidi', value: gubreCesidi })}>
          <PickerItem label="Seçiniz" value="Seçiniz" />
          <PickerItem label="Ahır Gübresi" value="Ahır Gübresi" />
          <PickerItem label="Kompostlar" value="Kompostlar" />
          <PickerItem label="Yeşil Gübre" value="Yeşil Gübre" />
          <PickerItem label="Amonyak" value="Amonyak" />
          <PickerItem label="Amonyum nitrat" value="Amonyum nitrat" />
          <PickerItem label="Üre" value="Üre" />
          <PickerItem label="Süperfosfatlar" value="Süperfosfatlar" />
          <PickerItem label="Amonyum fosfat" value="Amonyum fosfat" />
          <PickerItem label="Potasyumlu gübreler" value="Potasyumlu gübreler" />
          <PickerItem label="Kompoze Gübreler" value="Kompoze Gübreler" />
        </Picker>
      );
    } 
    else if (urun === 'Arpa') {
      return (
        <Picker
          style={styles.textStyle}
          selectedValue={this.props.gubreCesidi}
          onValueChange={gubreCesidi =>
            this.props.tarlaEkleChanged({ props: 'gubreCesidi', value: gubreCesidi })}>
          <PickerItem label="Seçiniz" value="Seçiniz" />
          <PickerItem label="Ahır Gübresi" value="Ahır Gübresi" />
          <PickerItem label="Kompostlar" value="Kompostlar" />
          <PickerItem label="Yeşil Gübre" value="Yeşil Gübre" />
          <PickerItem label="Amonyak" value="Amonyak" />
          <PickerItem label="Amonyum nitrat" value="Amonyum nitrat" />
          <PickerItem label="Üre" value="Üre" />
          <PickerItem label="Süperfosfatlar" value="Süperfosfatlar" />
          <PickerItem label="Amonyum fosfat" value="Amonyum fosfat" />
          <PickerItem label="Potasyumlu gübreler" value="Potasyumlu gübreler" />
          <PickerItem label="Kompoze Gübreler" value="Kompoze Gübreler" />
        </Picker>
      );
    }

    return (
      <Picker
        style={styles.textStyle }
        selectedValue={this.props.gubreCesidi}
        onValueChange={gubreCesidi =>
          this.props.tarlaEkleChanged({ props: 'gubreCesidi', value: gubreCesidi })}>
        <PickerItem label="" value="" />
      </Picker>
    );
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <Image source={require('../images/tarlaAdi.png')}/>
            <TextInput
              style={ styles.textStyle }
              placeholder={'Tarla Adı'}
              selectedValue={this.props.tarlaAdi}
              onChangeText={tarlaAdi =>
                this.props.tarlaEkleChanged({ props: 'tarlaAdi', value: tarlaAdi })}
              value={this.props.tarlaAdi} />
          </CardSection>
          <CardSection>
            <DatePicker
              style={{ flex: 1, width: 200, color: '#fff' }}
              date={this.props.ekimTarihi}
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
              onDateChange={(ekimTarihi) => {this.props.tarlaEkleChanged({ props: 'ekimTarihi', value: ekimTarihi })}}/>
          </CardSection>
          <CardSection>
            <Image source={require('../images/urunAdi.png')}/>
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.urunAdi}
              onValueChange={urunAdi => this.props.tarlaEkleChanged({ props: 'urunAdi', value: urunAdi })}>
              <PickerItem label="Ürün" value="Ürün" />
              <PickerItem label="Arpa" value="Arpa" />
              <PickerItem label="Buğday" value="Buğday" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/urunCesidi.png')}/>
            <Text style={styles.textStyle}>Ekilecek Ürün Çeşidi</Text>
              {this.urunSelect(this.props.urunAdi)}
          </CardSection>
          <CardSection>
            <Image source={require('../images/tarimTipi.png')}/>
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.tarimMetodu}
              onValueChange={tarimMetodu =>
                this.props.tarlaEkleChanged({ props: 'tarimMetodu', value: tarimMetodu })}>
              <PickerItem label="Tarım Metodu" value="Tarım Metodu" />
              <PickerItem label="İntansif (Modern-Yoğun) Tarım"
              value="intansif (Modern-Yoğun) Tarım" />
              <PickerItem label="Ekstansif (ilkel-Kaba-Yaygın) Tarım"
              value="Ekstansif (ilkel-Kaba-Yaygın) Tarım" />
              <PickerItem label="Plantasyon Tarım"
              value="Plantasyon Tarım" />
              <PickerItem label="Nadas Tarım"
              value="Nadas Tarım" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreTuru.png')}/>
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.gubreTuru}
              onValueChange={gubreTuru =>
                this.props.tarlaEkleChanged({ props: 'gubreTuru', value: gubreTuru })}>
              <PickerItem 
                label="Gübre Türü" 
                Value="Gübre Türü"/>
              <PickerItem 
                label="Hayvan"
                value="Hayvan"/>
              <PickerItem 
                label="Yeşil Gübre"
                value="Yeşil Gübre"/>
              <PickerItem 
                label="Kemik Unu"
                value="Kemik Unu"/>
              <PickerItem 
                label="Kan Tozu"
                value="Kan Tozu"/>
              <PickerItem 
                label="Boynuz"
                value="Boynuz"/>
              <PickerItem 
                label="Tırnak Tozu"
                value="Tırnak Tozu"/>
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreCesidi.png')}/>
            <Text style={styles.textStyle}>Gübre Çeşidi</Text>
              {this.gubreCesidiSelect(this.props.urunAdi)}
          </CardSection>
          <CardSection>
            <Image source={require('../images/miktar.png')}/>
            <TextInput
              style={styles.textStyle}
              placeholderStyle={styles.textStyle}
              placeholder={'Ürün Miktarı'}
              selectedValue={this.props.urunMiktari}
              onChangeText={urunMiktari =>
                this.props.tarlaEkleChanged({ props: 'urunMiktari', value: urunMiktari })}
              value={this.props.urunMiktari} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.urunMiktariCinsi}
              onValueChange={urunMiktariCinsi =>
              this.props.tarlaEkleChanged({ props: 'urunMiktariCinsi', value: urunMiktariCinsi })}>
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
              placeholder={"Gübre Miktarı"}
              onChangeText={gubreMiktari =>
                this.props.tarlaEkleChanged({ 
                  props: 'gubreMiktari',
                  value: gubreMiktari })}
              value={this.props.gubreMiktari}/>
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.gubreMiktariCinsi}
              onValueChange={gubreMiktariCinsi =>
                this.props.tarlaEkleChanged({ props: 'gubreMiktariCinsi', value: gubreMiktariCinsi })}>
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
              selectedValue={this.props.urunMaliyet}
              onChangeText={urunMaliyet =>
                this.props.tarlaEkleChanged({ props: 'urunMaliyet', value: urunMaliyet })}
              value={this.props.urunMaliyet} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.maliyetCinsiUrun}
              onValueChange={maliyetCinsiUrun =>
                this.props.tarlaEkleChanged({ props: 'maliyetCinsiUrun', value: maliyetCinsiUrun })}>
              <PickerItem label="Birim" value="Birim" />
              <PickerItem label="tl" value="tl" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreCesidi.png')}/>
            <TextInput
              placeholder={'Gübre Çeşidi Maliyeti'}
              style={styles.textStyle}
              selectedValue={this.props.gubreCesitMaliyet}
              onChangeText={gubreCesitMaliyet =>
                this.props.tarlaEkleChanged({ props: 'gubreCesitMaliyet', value: gubreCesitMaliyet })}
              value={this.props.gubreCesitMaliyet} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.maliyetCinsiGubreCesidi}
              onValueChange={maliyetCinsiGubreCesidi =>
                this.props.tarlaEkleChanged({ props: 'maliyetCinsiGubreCesidi', value: maliyetCinsiGubreCesidi })}>
              <PickerItem label="Birim" value="Birim" />
              <PickerItem label="tl" value="tl" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/gubreTuru.png')}/>
            <TextInput
              placeholder={'Gübre Türü Maliyeti'}
              style={styles.textStyle}
              selectedValue={this.props.gubreTuruMaliyet}
              onChangeText={gubreTuruMaliyet =>
                this.props.tarlaEkleChanged({ props: 'gubreTuruMaliyet', value: gubreTuruMaliyet })}
              value={this.props.gubreTuruMaliyet} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.maliyetCinsiGubreTuru}
              onValueChange={maliyetCinsiGubreTuru =>
                this.props.tarlaEkleChanged({ props: 'maliyetCinsiGubreTuru', value: maliyetCinsiGubreTuru })}>
              <PickerItem label="Birim" value="Birim" />
              <PickerItem label="tl" value="tl" />
            </Picker>
          </CardSection>
          <CardSection>
            <Image source={require('../images/ekildigiAlan.png')}/>
            <TextInput
              placeholder={'Ekilecek Alan Boyutu'}
              style={styles.textStyle}
              selectedValue={this.props.ekilecekAlanBoyutu}
              onChangeText={ekilecekAlanBoyutu =>
                this.props.tarlaEkleChanged({ props: 'ekilecekAlanBoyutu', value: ekilecekAlanBoyutu })}
              value={this.props.ekilecekAlanBoyutu} />
            <Picker
              style={styles.textStyle}
              selectedValue={this.props.alanCinsi}
              onValueChange={alanCinsi =>
                this.props.tarlaEkleChanged({ props: 'alanCinsi', value: alanCinsi })}>
              <PickerItem label="Alan" value="Alan" />
              <PickerItem label="Dönüm" value="Dönüm" />
            </Picker>
          </CardSection>
          <CardSection>
            <TouchableOpacity 
              onPress={this.clickSave.bind(this)} 
              style={styles.buttonStyle}>
              <Text style={styles.textStyleCins}>Kaydet </Text>
            </TouchableOpacity>
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
    fontSize: 16,
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
  }});
const mapToStateProps = ({ TarlaEkleResponse }) => {
  const {
    tarlaAdi,
    ekimTarihi,
    urunAdi,
    urunCesidi,
    urunMiktari,
    urunMaliyet,
    gubreCesidi,
    gubreCesitMaliyet,
    gubreTuru,
    gubreTuruMaliyet,
    gubreMiktari,
    urunMiktariCinsi,
    tarimMetodu,
    gubreMiktariCinsi,
    ekilecekAlanBoyutu,
    maliyetCinsi,
    maliyetCinsiUrun,
    maliyetCinsiGubreCesidi,
    maliyetCinsiGubreTuru,
    alanCinsi } = TarlaEkleResponse;

  return {
    tarlaAdi,
    ekimTarihi,
    urunAdi,
    urunCesidi,
    urunMiktari,
    urunMaliyet,
    urunMiktariCinsi,
    tarimMetodu,
    gubreCesitMaliyet,
    gubreTuru,
    gubreTuruMaliyet,
    gubreMiktari,
    gubreMiktariCinsi,
    gubreCesidi,
    ekilecekAlanBoyutu,
    maliyetCinsi,
    maliyetCinsiUrun,
    maliyetCinsiGubreCesidi,
    maliyetCinsiGubreTuru,
    alanCinsi
  };
};

export default connect(mapToStateProps, { tarlaEkleChanged, tarlaCreate })(TARLAEKLEFORM);
