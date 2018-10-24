import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  CameraRoll,
  Platform,
  PermissionsAndroid
} from 'react-native';
// import PropTypes from "prop-types";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class AddMedia extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="plus-square-o"
        color={tintColor}
        style={{ padding: 5 }}
        size={25}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {}

  handleButtonPress = async () => {
    try {
      const isGranted = await PermissionsAndroid.check(
        'android.permission.READ_EXTERNAL_STORAGE'
      );

      if (!isGranted) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Request access',
            message: 'LET US INNNNNNN'
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
        }
      }

      await CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos'
      })
        .then(res => {
          this.setState({
            photos: res.edges
          });
          console.error(res);
        })
        .catch(err => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Load Images" onPress={this.handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => (
            <Image
              key={i}
              style={{ width: 300, height: 100 }}
              source={{ uri: p.node.image.uri }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

// AddMedia.propTypes = {}

const s = StyleSheet.create({
  container: { flex: 1 }
});

export default AddMedia;
