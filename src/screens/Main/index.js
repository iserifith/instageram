import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Activities from './Activities';
import AddMedia from './AddMedia';
import Explore from './Explore';
import Profile from './Profile';

export default createBottomTabNavigator(
  {
    Home: { screen: Home },
    Explore: { screen: Explore },
    AddMedia: {
      screen: AddMedia,
      navigationOptions: {
        tabBarIcon: ({ tintcolor }) => (
          <FontAwesome
            name="plus-square-o"
            size={25}
            style={{ padding: 5 }}
            color={tintcolor}
          />
        )
      }
    },
    Activities: { screen: Activities },
    Profile: { screen: Profile }
  },
  {
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        showIcon: true
      }
    }
  }
);

// navigationOptions = {
//   headerTitleStyle: { textAlign: "center", alignSelf: "center", flex: 1 },
//   headerLeft: (
//     <FontAwesome name="camera" size={25} style={{ paddingLeft: 15 }} />
//   ),
//   title: "InstaGeram",
//   headerRight: (
//     <FontAwesome name="send" size={25} style={{ paddingRight: 15 }} />
//   )
// };
