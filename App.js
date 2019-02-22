import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HatListesiScreen from './src/screens/HatListesi/HatListesiScreen';
import DurakBilgisiScreen from './src/screens/DurakBilgisi/DurakBilgisiScreen';


const Drawer = createDrawerNavigator(
  {
    HatListesi: {
      screen: HatListesiScreen,
      navigationOptions: () => ({
        title: 'Otobüsüm Nerede'
      })
    },
    DurakBilgisi: {
      screen: DurakBilgisiScreen,
      navigationOptions: () => ({
        title: 'Durak Bilgisi'
      })
    },
    CekGonder: {
      screen: CekGonderScreen,
      navigationOptions: () => ({
        title: 'Çek - Gönder'
      })
    }
  },
  {
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

const App = createAppContainer(Drawer);

export default App;
