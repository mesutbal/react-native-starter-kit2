import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BurulasHeader from '../../components/headers/BurulasHeader';
import HatListesiPage from './HatListesiPage';

const HatListesiScreen = createStackNavigator(
    {
        Main: {
            screen: () => (<HatListesiPage />),
            navigationOptions: ({ navigation }) => ({
                header: () => (<BurulasHeader navigation={navigation} />)
            })
        }
    },
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    }
);

export default HatListesiScreen;
