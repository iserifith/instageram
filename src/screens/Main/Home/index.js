import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
// import PropTypes from "prop-types";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { robotoWeights } from 'react-native-typography';
import NavigationHeader from '../NavigationHeader';
import { color, images } from '../../../commons';
// import { Card } from "../../../components";

const { height } = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="home"
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
      <View style={{ flex: 1 }}>
        <ScrollView style={s.container}>
          <NavigationHeader />
          <View style={s.card}>
            <View style={s.cardHeader}>
              <Image
                source={images.placeholderProfilePic}
                style={s.cardHeaderImage}
              />
              <Text style={[s.cardUsername, robotoWeights.condensedBold]}>
                efsstnm
              </Text>
              <TouchableOpacity style={s.option}>
                <Entypo name="dots-three-vertical" />
              </TouchableOpacity>
            </View>
            <View style={s.cardContentWrapper}>
              <Image style={s.cardContentImage} source={images.persianCat} />
              <View style={s.cardContentIconWrapper}>
                <TouchableOpacity style={s.cardContentIcon}>
                  <Feather name="thumbs-up" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={s.cardContentIcon}>
                  <Feather name="message-square" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={s.cardContentIcon}>
                  <Feather name="share-2" size={20} />
                </TouchableOpacity>
              </View>
              <Text style={(robotoWeights.condensedBold, { padding: 10 })}>
                2134 Likes
              </Text>
            </View>
          </View>
          <View style={s.card}>
            <View style={s.cardHeader}>
              <Image
                source={images.placeholderProfilePic}
                style={s.cardHeaderImage}
              />
              <Text style={[s.cardUsername, robotoWeights.condensedBold]}>
                efsstnm
              </Text>
              <TouchableOpacity style={s.option}>
                <Entypo name="dots-three-vertical" />
              </TouchableOpacity>
            </View>
            <View style={s.cardContentWrapper}>
              <Image style={s.cardContentImage} source={images.whiteTiger} />
              <View style={s.cardContentIconWrapper}>
                <TouchableOpacity style={s.cardContentIcon}>
                  <Feather name="thumbs-up" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={s.cardContentIcon}>
                  <Feather name="message-square" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={s.cardContentIcon}>
                  <Feather name="share-2" size={20} />
                </TouchableOpacity>
              </View>
              <Text style={(robotoWeights.condensedBold, { padding: 10 })}>
                1 Likes
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// index.propTypes = {}

const s = StyleSheet.create({
  container: { backgroundColor: color.primary, flex: 1 },
  cardHeader: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: color.secondary,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  cardHeaderImage: {
    height: 40,
    width: 40,
    borderRadius: 90,
    padding: 10
  },
  cardUsername: {
    fontSize: 16,
    marginLeft: 30
  },
  option: {
    position: 'absolute',
    right: 0,
    padding: 10,
    marginRight: 15
  },
  cardContentWrapper: {},
  cardContentImage: {
    resizeMode: 'cover',
    height: (45 / 100) * height,
    width: '100%'
  },
  cardContentIcon: {
    padding: 10
  },
  cardContentIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  card: {
    elevation: 3,
    backgroundColor: color.secondary,
    margin: 5
  }
});

export default Home;
