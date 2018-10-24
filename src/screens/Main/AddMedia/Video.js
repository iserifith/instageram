import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  CameraRoll,
  ScrollView,
  TouchableOpacity
} from 'react-native';
// import PropTypes from "prop-types";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentWillMount() {
    this.displayGallery();
  }

  displayGallery() {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
      .then(res => {
        this.setState({ photos: res.edges });
        console.info(this.state.photos);
      })
      .catch(err => {
        this.setState({ app_error: 'Error Occured' });
      });
  }

  render() {
    return (
      <View style={s.container}>
        <Text style={s.text}>COMING SOON</Text>
      </View>
    );
  }
}

// index.propTypes = {}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default Video;
