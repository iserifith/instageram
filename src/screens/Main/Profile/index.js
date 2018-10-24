import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from "prop-types";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationHeader from '../NavigationHeader';

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="user-circle"
        color={tintColor}
        style={{ padding: 5 }}
        size={25}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.container}>
        <NavigationHeader />
        <Text>Profile</Text>
      </View>
    );
  }
}

// Profile.propTypes = {}

const s = StyleSheet.create({
  container: { flex: 1 }
});

export default Profile;
