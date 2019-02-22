import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HatListesiScreen from './src/screens/HatListesi/HatListesiScreen';
import DurakBilgisiScreen from './src/screens/DurakBilgisi/DurakBilgisiScreen';
import CekGonderScreen from './src/screens/CekGonder/CekGonderScreen';
import NeredeyimScreen from './src/screens/Neredeyim/NeredeyimScreen';


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
    },
    Neredeyim: {
      screen: NeredeyimScreen,
      navigationOptions: () => ({
        title: 'Neredeyim'
      })
    }
  },
  {
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

const App = createAppContainer(Drawer);

export default App;
