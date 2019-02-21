import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BurulasHeader from '../../components/headers/BurulasHeader';
import HatListesiPage from './HatListesiPage';
import HatDetayScreen from '../HatDetayi/HatDetayScreen';

const HatListesiScreen = createStackNavigator(
    {
        Main: {
            screen: ({ navigation }) => (<HatListesiPage navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                header: () => (<BurulasHeader navigation={navigation} />)
            })
        },
        Detay: {
            screen: () => (<HatDetayScreen />),
            navigationOptions: ({ navigation }) => ({
                title: `Hat - ${navigation.state.params.hat.HatAdi}`,
                headerBackTitle: 'Geri', //Kontrol edilecek
                headerTruncatedBackTitle: 'Geri'
            })
        }
    },
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    }
);

export default HatListesiScreen;
