import { combineReducers } from 'redux';
import KimlikDogrulamaReducers from './KimlikdogrulamaReducers';
import TarlaEkleReducers from './TarlaEkleReducers';
import tarlaDataReducers from './TarlaDataReducers';
import tarlaUpdateReducers from './tarlaUpdateReducers';
import TarlaDeleteReducers from './TarlaDeleteReducers';
import uyeOlReducers from './uyeOlReducers';

export default combineReducers ({
	TarlaEkleResponse: TarlaEkleReducers,
	kimlikdogrulamaResponse: KimlikDogrulamaReducers,
	tarlaDataResponse: tarlaDataReducers,
	tarlaUpdateResponse: tarlaUpdateReducers,
	TarlaDeleteResponse: TarlaDeleteReducers,
	uyeOlResponse: uyeOlReducers,
});
