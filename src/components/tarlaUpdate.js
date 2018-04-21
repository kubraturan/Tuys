import React, { Component } from 'react';
import { Text, TextInput, Picker, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { tarlalariDuzenle } from '../actions';

let PickerItem = Picker.Item;

class TarlaUpdate extends Component {


 state = {
   konumEkleLongitude: '',
   konumEkleLatitude: '',
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
     konumEkleLongitude,
     konumEkleLatitude,
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

   this.setState({ konumEkleLongitude,
   konumEkleLatitude,
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

 urunSelect(urun) {
   if (urun === 'Buğday') {
       return (<Picker
                 style={{ flex: 1 }}
                 selectedValue={this.state.urunCesidi}
 onValueChange={urunCesidi => this.setState({ urunCesidi })}
       >
         <PickerItem label="Ürün Çeşidi Giriniz" value="Ürün Çeşidi Giriniz" />
             <PickerItem label="Kavuzlu Buğday" value="Kavuzlu Buğday" />
               <PickerItem label="Siyez" value="Siyez" />
               <PickerItem label="Makarnalık Buğday" value="Makarnalık Buğday" />
               <PickerItem label="Ekmeklik" value="Ekmeklik" />
               <PickerItem label="Horason Buğdayı" value="Horason Buğdayı" />
               <PickerItem label="Gemlik" value="Gemlik" />
               <PickerItem label="İngiliz Buğdayı" value="İngiliz Buğdayı" />
               <PickerItem label="Polonya Buğdayı" value="Polonya Buğdayı" />
               </Picker>);
   } else if (urun === 'Arpa') {
       return (<Picker
                 style={{ flex: 1 }}
                 selectedValue={this.state.urunCesidi}
onValueChange={urunCesidi => this.setState({ urunCesidi })}
       >
       <PickerItem label="Ürün Çeşidi Giriniz" value="Ürün Çeşidi Giriniz" />
             <PickerItem label="Beyşehir 98" value="Beyşehir 98" />
               <PickerItem label="Tarm 98" value="Tarm 98" />
               <PickerItem label="Konevi 98" value="Konevi 98" />
               <PickerItem label="Larende" value="Larende" />
               <PickerItem label="Karatay 94" value="Karatay 94" />
               <PickerItem label="Kıral 97" value="Kıral 97" />

               </Picker>);
 }
}
 gubreCesidiSelect(urun) {
   if (urun === 'Buğday') {
       return (<Picker
                 style={{ flex: 1 }}
                 selectedValue={this.state.gubreCesidi}
  onValueChange={gubreCesidi => this.setState({ gubreCesidi })}
       >
       <PickerItem label="Gübre Türü Çeşidi Giriniz" value="Gübre Türü Çeşidi Giriniz" />
             <PickerItem label="Gübre Buğday" value="gübrebugday" />
               <PickerItem label="GB" value="gb" />
               </Picker>);
   } else if (urun === 'Arpa') {
       return (<Picker
                 style={{ flex: 1 }}
                 selectedValue={this.state.gubreCesidi}
onValueChange={gubreCesidi => this.setState({ gubreCesidi })}
       >
       <PickerItem label="Gübre Türü Giriniz" value="Gübre Türü Giriniz" />
             <PickerItem label="Gübre Arpa" value="gübrearpa" />
               <PickerItem label="ga" value="ga" />


               </Picker>);
 }
}

  clickUpdate() {
    const { konumEkleLongitude,
    konumEkleLatitude,
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

    this.props.tarlalariDuzenle({ konumEkleLongitude,
    konumEkleLatitude,
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
      return <Button onPress={this.clickUpdate.bind(this)}> Guncelle </Button>;
    }
    return <Spinner size="small" />;
  }


   render() {
       return (
         <ScrollView>
         <Card>
         <CardSection>
         <Text style={{ flex: 1 }}>Tarla Adı</Text>
         <TextInput
         style={{ flex: 1 }}
           placeholder={'Tarla Adını'}
           selectedValue={this.state.tarlaAdi}
           onValueText={tarlaAdi => this.setState({ tarlaAdi })}

           value={this.state.tarlaAdi} />

                 </CardSection>
         <CardSection>
         <Text style={{ flex: 1 }}> Tarih</Text>
         <DatePicker
           style={{ width: 200 }}
           date={this.state.ekimTarihi}
           mode="date"
           placeholder="select date"
           format="YYYY-MM-DD"
           minDate="2016-01-01"
           maxDate="2098-12-31"
           confirmBtnText="Confirm"
           cancelBtnText="Cancel"
           customStyles={{
             dateIcon: {
               position: 'absolute',
               left: 0,
               top: 4,
               marginLeft: 0
             },
             dateInput: {
               marginLeft: 36
             }

           }}
   onDateChange={(ekimTarihi) => { this.setState({ date: ekimTarihi }); }
         }
         />
         </CardSection>

     <CardSection>
      <Text style={{ flex: 1 }}> Ekilecek Ürün</Text>
           <Picker
                 style={{ flex: 1 }}
                 selectedValue={this.state.urunAdi}
         onValueChange={urunAdi => this.setState({ urunAdi })}
               >

                <PickerItem label=" Ekilecek Ürün Giriniz" value=" Ekilecek Ürün Giriniz" />
               <PickerItem label="Arpa" value="Arpa" />
               <PickerItem label="Buğday" value="Buğday" />
               </Picker>
     </CardSection>

     <CardSection>


   <Text style={{ flex: 1 }}>Ekilecek Ürün Çeşidi</Text>
               {this.urunSelect(this.state.urunAdi)}
     </CardSection>
     <CardSection>
     <Text style={{ flex: 1 }}>Gübre Çeşidi</Text>
       {this.gubreCesidiSelect(this.state.urunAdi)}

     </CardSection>
     <CardSection>

<Text style={{ flex: 1 }}>Gübre Türü </Text>
<Picker
style={{ flex: 1 }}
selectedValue={this.state.gubreTuru}
onValueChange={gubreTuru =>
this.setState({ gubreTuru })}
     >
         <PickerItem label=" Gübre Türü Seçiniz" value=" Gübre Türü Seçiniz" />
<Picker.Item label="Hayvan"
value="Hayvan" />
<Picker.Item label="Yeşil Gübre"
value="Yeşil Gübre" />
<Picker.Item label="Kemik Unu"
value="Kemik Unu" />
<Picker.Item label="Kan Tozu"
value="Kan Tozu" />
<Picker.Item label="Boynuz"
value="Boynuz" />
<Picker.Item label="Tırnak Tozu"
value="Tırnak Tozu" />
</Picker>
</CardSection>



              <CardSection>
              <Text style={{ flex: 1 }}>Tarım Metodu </Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.state.tarimMetodu}
                onValueChange={tarimMetodu => this.setState({ tarimMetodu })}
                      >
                           <PickerItem label=" Tarım Metodu Seçiniz" value="Tarım Metodu Seçiniz" />
              <Picker.Item label="İntansif (Modern-Yoğun) Tarım"
               value="intansif (Modern-Yoğun) Tarım" />
              <Picker.Item label="Ekstansif (ilkel-Kaba-Yaygın) Tarım"
               value="Ekstansif (ilkel-Kaba-Yaygın) Tarım" />
               <Picker.Item label="Plantasyon Tarım"
                value="Plantasyon Tarım" />
               <Picker.Item label="Nadas Tarım"
                value="Nadas Tarım" />
            </Picker>

              </CardSection>
<CardSection>
   <Text style={{ flex: 1 }}>Ekilecek Ürün Miktarı</Text>
   <TextInput
   style={{ flex: 1 }}
     placeholder={'Ürün Miktarı'}
     selectedValue={this.state.urunMiktari}
     onChangeText={urunMiktari => this.setState({ urunMiktari })}
     value={this.state.urunMiktari}
   />
                                 <Picker
                                             style={{ flex: 1 }}
                                             selectedValue={this.state.urunMiktariCinsi}
         onValueChange={urunMiktariCinsi => this.setState({ urunMiktariCinsi })}
                                           >
                                           <PickerItem label="Cinsi" value="Cinsi" />
                                           <PickerItem label="kg" value="kg" />
                                           <PickerItem label="ton" value="ton" />
                                         <PickerItem label="teneke" value="teneke" />
                                           </Picker>
   </CardSection>
   <CardSection>

                     <Text style={{ flex: 1 }}>Gübre Miktarı</Text>

                                       <TextInput
                                       style={{ flex: 1 }}
                                         placeholder={'Gübre Miktarı'}
                                         onChangeText={gubreMiktari =>
               this.setState({ gubreMiktari })}
                                         value={this.state.gubreMiktari}
                                       />


                                                                         <Picker
   style={{ flex: 1 }}
   selectedValue={this.state.gubreMiktariCinsi}
  onValueChange={gubreMiktariCinsi => this.setState({ gubreMiktariCinsi })}
>
     <PickerItem label="Cinsi" value="Cinsi" />
     <PickerItem label="kg" value="kg" />
           <PickerItem label="ton" value="ton" />
             <PickerItem label="teneke" value="teneke" />
                     </Picker>

                                       </CardSection>


   <CardSection>

   <Text style={{ flex: 1 }}>Ekilecek Ürün Maliyeti:</Text>
   <TextInput
   style={{ flex: 1 }}
     placeholder={'Ürün Maliyeti'}
     selectedValue={this.state.urunMaliyet}
  onChangeText={urunMaliyet => this.setState({ urunMaliyet })}

     value={this.state.urunMaliyet} />

     <Picker
             style={{ flex: 1 }}
             selectedValue={this.state.maliyetCinsiUrun}
    onValueChange={maliyetCinsiUrun => this.setState({ maliyetCinsiUrun })}
           >
           <PickerItem label="Birim" value="Birim" />
           <PickerItem label="tl" value="tl" />

           </Picker>


           </CardSection>


           <CardSection>
           <Text style={{ flex: 1 }}>Ekilecek Gübre Çeşidi Maliyeti:</Text>
           <TextInput
           style={{ flex: 1 }}
             placeholder={'Gübre Çeşidi Maliyeti'}
             selectedValue={this.state.gubreCesitMaliyet}
              onValueText={gubreCesitMaliyet => this.setState({ gubreCesitMaliyet })}

             value={this.state.gubreCesitMaliyet} />

             <Picker
                     style={{ flex: 1 }}
                     selectedValue={this.state.maliyetCinsiGubreCesidi}
            onValueChange={maliyetCinsiGubreCesidi => this.setState({ maliyetCinsiGubreCesidi })}
                   >
                   <PickerItem label="Birim" value="Birim" />
                   <PickerItem label="tl" value="tl" />

                   </Picker>


                   </CardSection>
                         <CardSection>
           <Text style={{ flex: 1 }}>Ekilecek Gübre Türü Maliyeti:</Text>
           <TextInput
           style={{ flex: 1 }}
             placeholder={'Gübre Türü Maliyeti'}
             selectedValue={this.state.gubreTuruMaliyet}
              onValueText={gubreTuruMaliyet => this.setState({ gubreTuruMaliyet })}

             value={this.state.gubreTuruMaliyet} />
             <Picker
                     style={{ flex: 1 }}
                     selectedValue={this.state.maliyetCinsiGubreTuru}
            onValueChange={maliyetCinsiGubreTuru => this.setState({ maliyetCinsiGubreTuru })}
                   >
                   <PickerItem label="Birim" value="Birim" />
                   <PickerItem label="tl" value="tl" />

                   </Picker>


                   </CardSection>

                   <CardSection>
                   <Text style={{ flex: 1 }}>Ekilecek Alan Boyutu:</Text>
                   <TextInput
                   style={{ flex: 1 }}
                     placeholder={'Ekilecek Alan Boyutu'}
                     selectedValue={this.state.ekilecekAlanBoyutu}
                      onValueText={ekilecekAlanBoyutu => this.setState({ ekilecekAlanBoyutu })}

                     value={this.state.ekilecekAlanBoyutu} />

                     <Picker
                             style={{ flex: 1 }}
                             selectedValue={this.state.alanCinsi}
      onValueChange={alanCinsi => this.setState({ alanCinsi })}
                           >
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



const mapToStateProps = ({ tarlaUpdateResponse }) => {
  const { loadingUpdate } = tarlaUpdateResponse;

  return {
  loadingUpdate };
};
export default connect(mapToStateProps,
  { tarlalariDuzenle })(TarlaUpdate);
