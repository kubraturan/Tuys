import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../ortak';
import { tarlalariDuzenle } from '../actions';


class TarlaUpdate extends Component {


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
         maliyetCinsiUrun,
       maliyetCinsiGubreCesidi,
     maliyetCinsiGubreTuru,
   alanCinsi } = this.props.tarlalar;

   this.setState({ tarlaAdi,
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
