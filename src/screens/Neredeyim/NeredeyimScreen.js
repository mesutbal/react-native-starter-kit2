import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BurulasHeader from '../../components/headers/BurulasHeader';
import NeredeyimPage from './NeredeyimPage';

const NeredeyimScreen = createStackNavigator(
    {
        CekGonderMain: {
            screen: ({ navigation }) => (<NeredeyimPage navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                header: () => (<BurulasHeader navigation={navigation}/>)
            })
        }
    },
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    }
);

export default NeredeyimScreen;
