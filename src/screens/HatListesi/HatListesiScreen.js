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
            navigationOptions: () => ({
                title: 'Hat Detayı',
                /*headerBackTitle: 'Geri',
                headerBackTitleVisible: true,
                headerTruncatedBackTitle: 'Geri'*/
            })
        }
    },
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    }
);

export default HatListesiScreen;
