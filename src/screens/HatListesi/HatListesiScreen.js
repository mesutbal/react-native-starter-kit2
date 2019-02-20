import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BurulasHeader from '../../components/headers/BurulasHeader';

const HatListesiScreen = createStackNavigator(
    {
        Main: {
            screen: () => (<View style={{ flex: 1, backgroundColor: 'red' }} />),
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
