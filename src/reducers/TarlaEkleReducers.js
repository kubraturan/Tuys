import { TARLA_EKLE_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {

  tarlaAdi: '',
  ekimTarihi: '',
  urunAdi: '',
   urunCesidi: '',
   urunMiktariCinsi: '',
    urunMiktari: '',
    urunMaliyet: '',
     gubreTuru: '',
     gubreTuruMaliyet: '',
      gubreCesidi: '',
      gubreCesitMaliyet: '',
       gubreMiktari: '',
        tarimMetodu: '',
        gubreMiktariCinsi: '',
        ekilecekAlanBoyutu: '',
        maliyetCinsiUrun: '',
      maliyetCinsiGubreCesidi: '',
    maliyetCinsiGubreTuru: '',
        loading: '',
        alanCinsi: ''


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
