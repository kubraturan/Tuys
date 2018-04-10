import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { AD_CHANGED_UYE,
  SOYAD_CHANGED_UYE,
  EMAIL_CHANGED_UYE,
  PASSWORD_CHANGED_UYE,
  LOGIN_USER_UYE,
  LOGIN_USER_SUCCESS_UYE,
  LOGIN_USER_FAIL_UYE } from './types';

  export const adChangeduye = (ad) => {
    return (dispatch) => {
      dispatch({
        type: AD_CHANGED_UYE,
        payload: ad
      });
    };
  };

  export const soyadChangeduye = (soyad) => {
    return (dispatch) => {
      dispatch({
        type: SOYAD_CHANGED_UYE,
        payload: soyad
      });
    };
  };

export const emailChangeduye = (email) => {
  return (dispatch) => {
    dispatch({
      type: EMAIL_CHANGED_UYE,
      payload: email
    });
  };
};

export const passwordChangeduye = (password) => {
  return (dispatch) => {
    dispatch({
      type: PASSWORD_CHANGED_UYE,
      payload: password
    });
  };
};

export const loginUseruye = ({ ad, soyad, email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_UYE });
    if (ad === '' || soyad === '' || email === '' || password === '') {
    loginFailBos(dispatch);
    } else {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginSucces(dispatch, user))
            .catch(() => loginFailuye(dispatch));
        }
  };
};

const loginFailuye = (dispatch) => {
  Alert.alert(
    'Mesaj',
    'Kullanıcı bilgileri hatalı',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  dispatch({
    type: LOGIN_USER_FAIL_UYE
  });
};

const loginSucces = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS_UYE,
    payload: user
  });
  Actions.main();
};


const loginFailBos = (dispatch) => {
  Alert.alert(
    'Mesaj',
  'Her iki alanda Dolu olmalı!',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  dispatch({
    type: LOGIN_USER_FAIL_UYE
  });
};
