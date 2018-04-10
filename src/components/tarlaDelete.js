import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { tarlaDelete } from '../actions';

class TarlaDelete extends Component {
  state = { tarlaAdi: '',
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
  componentWillMount() {
    const { tarlaAdi,
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
        maliyetCinsi });
  }

      clickDelete() {
        this.props.tarlaDelete({ uid: this.props.tarlalar.uid });
      }

    renderDeleteButton() {
      if (!this.props.loadingDelete) {
        return <Button onPress={this.clickDelete.bind(this)}> Tarlayı Sil </Button>;
      }
      return <Spinner size="small" />;
    }

   render() {
    return (
      <Card>
      <CardSection>
       {this.renderDeleteButton()}
      </CardSection>
      </Card>
    );
  }
}

const mapToStateProps = ({ TarlaDeleteResponse }) => {
  const { loadingDelete } = TarlaDeleteResponse;

  return {
loadingDelete };
};

export default connect(mapToStateProps, { tarlaDelete })(TarlaDelete);
