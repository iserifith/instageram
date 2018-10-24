import { createMaterialTopTabNavigator } from 'react-navigation';
import Gallery from './Gallery';
import Image from './Image';
import Video from './Video';

export default createMaterialTopTabNavigator({
  Gallery: { screen: Gallery },
  Image: { screen: Image },
  Video: { screen: Video }
});
