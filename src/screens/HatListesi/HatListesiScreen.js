import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const HatListesiScreen = createStackNavigator(
    {
        Main: {
            screen: () => (<View style={{ flex: 1, backgroundColor: 'red' }} />),
            navigationOptions: () => ({
                title: 'Hat Listesi'
            })
        }
    },
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    }
);

export default HatListesiScreen;
