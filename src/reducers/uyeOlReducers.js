import { AD_CHANGED_UYE,
  SOYAD_CHANGED_UYE,
  EMAIL_CHANGED_UYE,
   PASSWORD_CHANGED_UYE,
    LOGIN_USER_UYE,
    LOGIN_USER_SUCCESS_UYE,
     LOGIN_USER_FAIL_UYE } from '../actions/types';

const INITIAL_STATE = {
  ad: '',
  soyad: '',
  email: '',
  password: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AD_CHANGED_UYE:
        return { ...state, ad: action.payload };
    case SOYAD_CHANGED_UYE:
      return { ...state, soyad: action.payload };
    case EMAIL_CHANGED_UYE:
        return { ...state, email: action.payload };
    case PASSWORD_CHANGED_UYE:
      return { ...state, password: action.payload };
    case LOGIN_USER_UYE:

    return { ...state, loading: true };


      case LOGIN_USER_SUCCESS_UYE:
      return { ...state, loading: false };
    case LOGIN_USER_FAIL_UYE:
    return { ...state,
loading: false,
 ad: '',
      soyad: '',
      email: '',
      password: '', };
  default:
      return state;

  }
};
