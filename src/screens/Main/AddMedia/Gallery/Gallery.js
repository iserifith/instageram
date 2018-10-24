import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  CameraRoll,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { color } from '../../../../commons';
// import PropTypes from "prop-types";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage_permission: false,
      photos: [],
      app_error: '',
      selected_pic: null
    };
  }

  componentWillMount() {
    this.grantStoragePermission();
    this.displayGallery();
  }

  componentDidMount() {}

  grantStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Requesting Permission',
          message: 'pls?'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ storage_permission: true });
      } else {
        this.setState({ app_error: 'No Permission to access device storage' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  displayGallery() {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
      .then(res => {
        this.setState({ photos: res.edges });
        console.log(res.edges);
      })
      .catch(err => {
        this.setState({ app_error: 'Error Occured' });
      });
  }

  render() {
    if (!this.state.storage_permission) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
            {this.state.app_error}
          </Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.state.selected_pic !== null ? (
            <Image
              source={{ uri: this.state.selected_pic.node.image.uri }}
              style={{ flex: 1 }}
            />
          ) : (
            <Text>No selected</Text>
          )}
        </View>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={s.container}>
          {this.state.photos.map((p, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => this.setState({ selected_pic: p })}
            >
              <Image style={s.images} source={{ uri: p.node.image.uri }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('CreatePost', {
              image: this.state.selected_pic
            })
          }
          style={s.button}
        >
          <Text style={s.buttonText}>This One!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// index.propTypes = {}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  images: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    margin: 1
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: 'violet',
    borderRadius: 100
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default Gallery;
