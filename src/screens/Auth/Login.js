import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { images } from '../../commons';
import store from '../../redux/store';
import { setUser } from '../../redux/actions/AuthenticationActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  googleLogin = async () => {
    try {
      await GoogleSignin.configure();

      const data = await GoogleSignin.signIn();

      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken
      );

      const currentUser = await firebase
        .auth()
        .signInWithCredential(credential);
      await store.dispatch(setUser(JSON.stringify(currentUser.user.toJSON())));
      await this.props.screenProps.setIsLoggedIn();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={[robotoWeights.condensed, { fontSize: 25, margin: 10 }]}>
            aa
          </Text>
          <Image
            // source={images.angryCat}
            style={{ width: '80%' }}
          />
        </View>
        <View style={s.container}>
          <TouchableOpacity
            style={s.googleWrapper}
            onPress={() => this.googleLogin()}
          >
            <FontAwesome
              style={{ paddingLeft: 5 }}
              name="google"
              size={20}
              color="whitesmoke"
            />
            <Text style={[robotoWeights.bold, s.buttonText]}>
              Login With Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.googleWrapper}>
            <FontAwesome
              style={{ paddingLeft: 5 }}
              name="facebook"
              size={20}
              color="whitesmoke"
            />
            <Text style={[robotoWeights.bold, s.buttonText]}>
              Login With Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// index.propTypes = {}

const s = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'flex-end' },
  googleWrapper: {
    width: '60%',
    padding: 10,
    backgroundColor: 'midnightblue',
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'whitesmoke',
    marginLeft: 15
  }
});

export default Login;
