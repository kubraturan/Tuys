import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
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

 class RouterComponent extends React.Component {
     render() {
    return (
      <Router sceneStyle={{ marginTop: 65 }}>
      <Scene key="kimlik">
      <Scene key="ilkEkran" component={ilkEkranForm} title="İlk Ekran" />
      <Scene key="girisYap" component={LoginForm} title="Giris Ekrani" />
      <Scene key="uyeOl" component={uyeOlForm} title="Üye Ol" />
      </Scene>

      <Scene key="main">

      <Scene
        key="profilform"
        component={profilForm}
        title="Profil Sayfası"
      />
        <Scene
          onRight={() => Actions.tarlaEkle()}
          rightTitle="Yeni Tarla"
          key="tarlaList"
          component={TarlaList}
          title="Tarlalarım"
        />
        <Scene
          key="tarlaEkle"
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
          title="Toplam Maliyet Görüntüle"
        />


          </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
