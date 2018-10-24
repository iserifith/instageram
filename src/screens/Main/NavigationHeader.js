import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from "prop-types";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { systemWeights } from 'react-native-typography';

class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.container}>
        <FontAwesome style={{ padding: 15 }} name="camera" size={25} />
        <Text style={[systemWeights.bold, { padding: 15, fontSize: 20 }]}>
          instageram
        </Text>
        <FontAwesome style={{ padding: 15 }} name="send" size={25} />
      </View>
    );
  }
}

// index.propTypes = {}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    elevation: 3,
    backgroundColor: 'whitesmoke',
    width: '100%'
  }
});

export default NavigationHeader;
