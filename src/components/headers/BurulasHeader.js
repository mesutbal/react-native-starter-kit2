import React from 'react';
import { View, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { headerStyle } from '../../styles/HeaderStyle';

export default class BurulasHeader extends React.Component {

    render() {
        const { viewStyle, imageStyle, biletAlStyle } = headerStyle;
        return (
        <View style={viewStyle}>
            <Image 
                style={imageStyle}
                source={require('../../images/BurulasLogo.jpg')}
            />
            <View style={biletAlStyle}>
                <Entypo.Button 
                    size={30}
                    name="credit-card"
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => {}}
                />
                </View>
        </View>);
    }
}
