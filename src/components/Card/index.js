import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from "prop-types";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.container}>
        <Text>Card</Text>
      </View>
    );
  }
}

// index.propTypes = {}

const s = StyleSheet.create({
  container: { flex: 1 }
});

export default Card;
