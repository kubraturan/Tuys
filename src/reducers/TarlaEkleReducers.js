import moment from 'moment';
import { TARLA_EKLE_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from '../actions/types';


const INITIAL_STATE = {

  tarlaAdi: null,
  ekimTarihi: moment().format('DD-MM-YYYY'),
  urunAdi: null,
   urunCesidi: 'Seçiniz',
   urunMiktariCinsi: 'Cinsi',
    urunMiktari: null,
    urunMaliyet: null,
     gubreTuru: null,
     gubreTuruMaliyet: null,
      gubreCesidi: 'Seçiniz',
      gubreCesitMaliyet: null,
       gubreMiktari: null,
        tarimMetodu: null,
        gubreMiktariCinsi: 'Cinsi',
        ekilecekAlanBoyutu: null,
        maliyetCinsiUrun: 'Birim',
      maliyetCinsiGubreCesidi: 'Birim',
    maliyetCinsiGubreTuru: 'Birim',
        loading: '',
        alanCinsi: 'Birim'


};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TARLA_EKLE_CHANGED:
  return { ...state, [action.payload.props]: action.payload.value };
  case CREATE_REQUEST:
    return { ...state, loading: true };
  case CREATE_REQUEST_SUCCESS:
    return INITIAL_STATE;
  default:
  return state;

  }
};
