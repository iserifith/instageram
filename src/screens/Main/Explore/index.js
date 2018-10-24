import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from "prop-types";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Explore extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="globe"
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
        <Text>Explore</Text>
      </View>
    );
  }
}

// Explore.propTypes = {}

const s = StyleSheet.create({
  container: { flex: 1 }
});

export default Explore;
