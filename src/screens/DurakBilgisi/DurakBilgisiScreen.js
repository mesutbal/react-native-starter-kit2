import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BurulasHeader from '../../components/headers/BurulasHeader';
import DurakBilgisiPage from './DurakBilgisiPage';

const DurakBilgisiScreen = createStackNavigator(
    {
        DurakMain: {
            screen: ({ navigation }) => (<DurakBilgisiPage navigation={navigation} />),
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

export default DurakBilgisiScreen;
