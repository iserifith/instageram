import { createStackNavigator } from 'react-navigation';
import Gallery from './Gallery';
import CreatePost from './CreatePost';

export default createStackNavigator(
  {
    Gallery: { screen: Gallery },
    CreatePost: { screen: CreatePost }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
