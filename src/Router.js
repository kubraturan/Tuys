import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TarlaEkleForm from './components/TarlaEkleForm';
import TarlaList from './components/TarlaList';
import tarlaupdate from './components/tarlaUpdate';
import tarladelete from './components/tarlaDelete';
import profilForm from './components/profilForm';
import uyeOlForm from './components/uyeOlForm';
import ilkEkranForm from './components/ilkEkranForm';
import tarlaBilgisiGörüntüle from './components/tarlaBilgisiGoruntule';
import tarlaListMaliyet from './components/tarlaListMaliyet';
import mapMarkerList from './components/mapMarkerList';
import konumEkleMap from '../map/appOpen';

 class RouterComponent extends React.Component {

    render() {
      return (
        <Router
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navBarTitle}
          barButtonTextStyle={styles.barButtonTextStyle}
          barButtonIconStyle={styles.barButtonIconStyle}
          sceneStyle={{ marginTop: 53 }}>
          <Scene 
            key="kimlik">
            <Scene
              key="ilkEkran"
              type={ActionConst.RESET}
              component={ilkEkranForm}/>
            <Scene
              key="girisYap"
              component={LoginForm}
              style={{
                color: '#000',
               fontSize: 16,
               fontWeight: '600',
              }}
              title="Giriş Sayfası" />
            <Scene 
              key="uyeOl" 
              component={uyeOlForm} 
              title="Üye Ol" />
          </Scene>

          <Scene key="main">
            <Scene
              key="profilform"
              component={profilForm}
              title="Profil Sayfası"/>
            <Scene
              onRight={() => Actions.konumEkleMap()}
              rightTitle="Yeni Tarla"
              key="tarlaList"
              component={TarlaList}
              title="Tarlalarım"/>
            <Scene
              key="konumEkleMap"
              component={konumEkleMap}
              title="Konum Ekle"
            />
            <Scene
              key="TarlaEkleForm"
              component={TarlaEkleForm}
              title="Tarla Ekle"
            />
            <Scene
              key="tarlaupdate"
              component={tarlaupdate}
              title="Tarla Düzenle"
            />
            <Scene
              key="tarladelete"
              component={tarladelete}
              title="Tarla Sil"
            />
            <Scene
              key="tarlagoruntule"
              component={tarlaBilgisiGörüntüle}
              title="Tarla Görüntüle"
            />
            <Scene
              key="tarlaListMaliyet"
              component={tarlaListMaliyet}
              title="Toplam Maliyet"
            />
            <Scene
              key="mapMarkerList"
              component={mapMarkerList}
              title="Haritada Tarlalarım"
            />
          </Scene>
        </Router>
      );
    }
  }
const styles = {
  navBar: {
    backgroundColor: '#63656490',
  },
  navBarTitle:{
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  barButtonTextStyle:{
    color: '#FFFFFF'
  },
  barButtonIconStyle:{
    tintColor: 'rgb(255,255,255)'
  },
}
export default RouterComponent;
