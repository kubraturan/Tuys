import React, { Component } from 'react';
import { TextInput, Alert, View, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { adChangeduye, soyadChangeduye,
   emailChangeduye, passwordChangeduye, loginUseruye } from '../actions';
import { Spinner } from '../ortak';
var { height, width } = Dimensions.get('window');


class uyeOlForm extends Component {
  state ={ ad: '', soyad: '', email: '', password: '', loading: false };

  clickLoginuye() {
    const { ad, soyad, email, password } = this.props;
    this.props.loginUseruye({ ad, soyad, email, password });
  }

  loginSucces() {
    console.log('başarılı');
    this.setState({ loading: false });
  }

  loginFail() {
    console.log('Hatalı');
    this.setState({ loading: false });
    Alert.alert(
      'Mesaj',
      'Bilgiler hatalı!',
      [

        { text: 'Tamam', onPress: () => null }

      ]

    );
  }

  renderButtonuye() {

    if (!this.props.loading) {
      return  <TouchableOpacity onPress={this.clickLoginuye.bind(this)} style={styles.buttonStyle}>
        <Text style={styles.textStyle}> Onay </Text>
        </TouchableOpacity>
            }
          return <Spinner size="small" />;
  }
    render() {
        const { TextInputStyle } = styles;
        return (
          <ImageBackground source={require('../images/uyeOlTarla.jpg')}
          style={styles.backgroundImage} >
        <View style={{flex:1 ,marginTop: height/6}}>

        <TextInput
          placeholder="Ad"
          style={TextInputStyle}
          value={this.props.ad}
          onChangeText={ad => this.props.adChangeduye(ad)}
        />

        <TextInput
          placeholder="Soyad"
          style={TextInputStyle}
          value={this.props.soyad}
          onChangeText={soyad => this.props.soyadChangeduye(soyad)}
        />
        <TextInput
          placeholder="E-mail"
          style={TextInputStyle}
          value={this.props.email}
          onChangeText={email => this.props.emailChangeduye(email)}
        />

        <TextInput
          secureTextEntry
          placeholder="Şifre"
          style={TextInputStyle}
          value={this.props.password}
          onChangeText={password => this.props.passwordChangeduye(password)}
        />

        <TextInput
          secureTextEntry
          placeholder="Şifre"
          style={TextInputStyle}
          value={this.props.password}
          onChangeText={password => this.props.passwordChangeduye(password)}
        />

        {this.renderButtonuye()}

                </View>
  </ImageBackground>
);
}
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
        //resizeMode: 'cover'
    },
    textStyle: {
      alignSelf: 'stretch',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'

    },

      TextInputStyle: {
        alignSelf: 'stretch',
        color: '#636564',
        fontSize: 16,
        fontWeight: '600',
        backgroundColor: '#ffffff99',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#636564',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        marginLeft: 35,
        marginRight: 35,
        // flexDirection: 'row',
        position: 'relative'

      },
      buttonStyle: {

        backgroundColor: '#e3b64399',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#636564',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft:70,
          paddingRight:50,
        marginTop:5,
        marginLeft: 80,
        marginRight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        //  flexDirection: 'row',
        position: 'relative'

      }
    }
);
const mapStateToProps = ({ uyeOlResponse }) => {
  const { ad, soyad, email, password, loading } = uyeOlResponse;
  return {
    ad,
    soyad,
    email,
    password,
    loading
  };
};

export default connect(mapStateToProps,
  { adChangeduye, soyadChangeduye, emailChangeduye, passwordChangeduye, loginUseruye })(uyeOlForm);
