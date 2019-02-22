import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BurulasHeader from '../../components/headers/BurulasHeader';
import CekGonderPage from './CekGonderPage';

const CekGonderScreen = createStackNavigator(
    {
        CekGonderMain: {
            screen: ({ navigation }) => (<CekGonderPage navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                header: () => (<BurulasHeader navigation={navigation} cekgonder/>)
            })
        }
    },
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    }
);

export default CekGonderScreen;
