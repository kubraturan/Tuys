import React, { Component } from 'react';
import { TextInput, Alert, View } from 'react-native';
import { connect } from 'react-redux';
import { adChangeduye, soyadChangeduye,
   emailChangeduye, passwordChangeduye, loginUseruye } from '../actions';
import { Button, Card, CardSection, Spinner } from '../ortak';


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
      return <Button onPress={this.clickLoginuye.bind(this)}> ÜYE OL </Button>;
    }
    return <Spinner size="small" />;
  }
  render() {
    const { inputStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Card>
      <CardSection>
        <TextInput
          placeholder="Ad"
          style={inputStyle}
          value={this.props.ad}
          onChangeText={ad => this.props.adChangeduye(ad)}
        />
      </CardSection>

      <CardSection>
        <TextInput
          placeholder="Soyad"
          style={inputStyle}
          value={this.props.soyad}
          onChangeText={soyad => this.props.soyadChangeduye(soyad)}
        />
      </CardSection>

        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={this.props.email}
            onChangeText={email => this.props.emailChangeduye(email)}
          />
        </CardSection>

        <CardSection>
        <TextInput
          secureTextEntry
          placeholder="Şifre"
          style={inputStyle}
          value={this.props.password}
          onChangeText={password => this.props.passwordChangeduye(password)}
        />
        </CardSection>
        <CardSection>
          {this.renderButtonuye()}
        </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {

  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1
  }

};
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
