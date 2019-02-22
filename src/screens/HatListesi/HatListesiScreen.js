import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BurulasHeader from '../../components/headers/BurulasHeader';
import HatListesiPage from './HatListesiPage';
import HatDetayScreen from '../HatDetayi/HatDetayScreen';
import BiletAlScreen from '../BiletAl/BiletAlScreen';
import QrScreen from '../BiletAl/QrScreen';

const HatListesiScreen = createStackNavigator(
    {
        Main: {
            screen: ({ navigation }) => (<HatListesiPage navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                header: () => (<BurulasHeader navigation={navigation} />)
            })
        },
        Detay: {
            screen: ({ navigation }) => (<HatDetayScreen navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                title: `Hat - ${navigation.state.params.hat.HatAdi}`,
                headerBackTitle: 'Geri', //Kontrol edilecek
                headerTruncatedBackTitle: 'Geri'
            })
        },
        BiletAl: {
            screen: ({ navigation }) => (<BiletAlScreen navigation={navigation} />),
            navigationOptions: () => ({
                title: 'Bilet Al',
                headerBackTitle: 'Geri', //Kontrol edilecek
                headerTruncatedBackTitle: 'Geri'
            })
        },
        KareKod: {
            screen: ({ navigation }) => (<QrScreen navigation={navigation} />),
            navigationOptions: () => ({
                title: 'Bilet Bilgileriniz',
                headerLeft: null
            })
        }
    },
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    }
);

export default HatListesiScreen;
