import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HatListesiScreen from './src/screens/HatListesi/HatListesiScreen';


const Drawer = createDrawerNavigator(
  {
    HatListesi: {
      screen: HatListesiScreen
    }
  },
  {
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

const App = createAppContainer(Drawer);

export default App;
