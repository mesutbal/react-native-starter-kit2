import React from 'react';
import { View, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { headerStyle } from '../../styles/HeaderStyle';

export default class BurulasHeader extends React.Component {

    render() {
        const { viewStyle, imageStyle, biletAlStyle } = headerStyle;
        return (
        <View style={viewStyle}>
            <View>
                <Image 
                    style={imageStyle}
                    source={require('../../images/BurulasLogo.jpg')}
                />
            </View>
            <View style={biletAlStyle}>
                <Entypo.Button 
                    size={35}
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => {}}
                />
                </View>
        </View>);
    }
}
