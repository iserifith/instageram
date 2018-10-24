import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from "prop-types";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app_error: ''
    };
  }

  render() {
    if (this.state.app_error) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
            {this.state.app_error}
          </Text>
        </View>
      );
    }

    return (
      <View style={s.container}>
        <Text>Image</Text>
      </View>
    );
  }
}

// index.propTypes = {}

const s = StyleSheet.create({
  container: { flex: 1 }
});

export default Image;
