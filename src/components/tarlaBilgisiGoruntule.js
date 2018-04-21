import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, CardSection } from '../ortak';
import { tarlalariDuzenle } from '../actions';


class TarlaUpdate extends Component {


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
parseFloat(moment(this.state.ekimTarihi,"DD/MM/YYYY").format('YYYY')),
parseFloat(moment(this.state.ekimTarihi,"DD/MM/YYYY").format('MM')),
parseFloat(moment(this.state.ekimTarihi,"DD/MM/YYYY").format('DD'))
);
const bt = moment(bugununTarihi);
const et = moment(ekiminTarihi);
console.log(et);
//ektiğin günden geçen zaman
console.log((bt).diff(et, 'days'));


       return (
         <ScrollView>
         <Card>
         <CardSection>
<Text style={{ flex: 1 }}>Tarla Adı:</Text>
<Text style={{ flex: 1 }}>{this.state.tarlaAdi}</Text>
</CardSection>

<CardSection>
<Text style={{ flex: 1 }}>Ekim Tarihi:</Text>
<Text style={{ flex: 1 }}>{this.state.ekimTarihi}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Geçen Süre:</Text>
<Text style={{ flex: 1 }}>{bt.diff(et, 'days')} Gün</Text>
</CardSection>

<CardSection>
<Text style={{ flex: 1 }}>Ürün Adı:</Text>
<Text style={{ flex: 1 }}>{this.state.urunAdi}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Ürün Çeşidi:</Text>
<Text style={{ flex: 1 }}>{this.state.urunCesidi}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Gübre Türü:</Text>
<Text style={{ flex: 1 }}>{this.state.gubreTuru}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Gübre  Çeşidi:</Text>
<Text style={{ flex: 1 }}>{this.state.gubreCesidi}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Tarım Tipi:</Text>
<Text style={{ flex: 1 }}>{this.state.tarimMetodu}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Ürün Miktarı :</Text>
<Text style={{ flex: 1 }}>{this.state.urunMiktari} {this.state.urunMiktariCinsi}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Gübre Miktarı:</Text>
<Text style={{ flex: 1 }}>{this.state.gubreMiktari} {this.state.gubreMiktariCinsi}</Text>
</CardSection>
<CardSection>
<Text style={{ flex: 1 }}>Ekilecek Alan Boyutu:</Text>
<Text style={{ flex: 1 }}>{this.state.ekilecekAlanBoyutu} {this.state.alanCinsi}</Text>
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
