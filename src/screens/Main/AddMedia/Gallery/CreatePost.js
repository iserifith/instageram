import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from "prop-types";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.navigation.state);
  }

  render() {
    return (
      <View style={s.container}>
        <Text>CreatePost</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: { flex: 1 }
});

export default CreatePost;
