import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TARLA_EKLE_CHANGED,
  CREATE_REQUEST, CREATE_REQUEST_SUCCESS, TARLA_LIST_DATA_SUCCESS,
UPDATE_REQUEST, UPDATE_REQUEST_SUCCESS, DELETE_REQUEST, DELETE_REQUEST_SUCCESS,
 TARLALARIM_BUTTON } from './types';

export const tarlaEkleChanged = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: TARLA_EKLE_CHANGED,
      payload: { props, value }
    });
  };
};


export const tarlaCreate = ({
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
alanCinsi }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: CREATE_REQUEST });
    firebase.database().ref(`${currentUser.uid}`)
      .push({
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
      alanCinsi })
        .then(() => {
         dispatch({ type: CREATE_REQUEST_SUCCESS });
           Actions.pop();
        });
  };
};


export const tarlalarListData = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`${currentUser.uid}`)
     .on('value', snapshot => {
       dispatch({ type: TARLA_LIST_DATA_SUCCESS, payload: snapshot.val() });
     });
  };
};


export const tarlalariDuzenle = ({
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
        , uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: UPDATE_REQUEST });
    firebase.database().ref(`${currentUser.uid}/${uid}`)
      .set({
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
      alanCinsi })
        .then(() => {
         dispatch({ type: UPDATE_REQUEST_SUCCESS });
          Actions.pop();
        });
  };
};


export const tarlaDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: DELETE_REQUEST });
    firebase.database().ref(`${currentUser.uid}/${uid}`)
      .remove()
        .then(() => {
         dispatch({ type: DELETE_REQUEST_SUCCESS });
          Actions.pop();
        });
  };
};

export const tarlalarimButton = (dispatch) => {
       dispatch({ type: TARLALARIM_BUTTON });
      Actions.profilform();
    };
