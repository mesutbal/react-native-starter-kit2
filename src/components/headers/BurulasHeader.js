import React from 'react';
import { View, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { headerStyle } from '../../styles/HeaderStyle';

export default class BurulasHeader extends React.Component {

    renderIcon() {

        if (this.props.cekgonder) {
            return (<Entypo.Button 
                size={30}
                name="camera"
                backgroundColor="transparent"
                underlayColor="transparent"
                color="gray"
                onPress={() => { this.props.navigation.openDrawer(); }}
            />);
        }

        return (<Entypo.Button 
            size={30}
            name="credit-card"
            backgroundColor="transparent"
            underlayColor="transparent"
            color="gray"
            onPress={() => { this.props.navigation.navigate('BiletAl'); }}
        />);
    }


    render() {
        const { viewStyle, imageStyle, biletAlStyle, drawerStyle } = headerStyle;
        return (
        <View style={viewStyle}>
            <Image 
                style={imageStyle}
                source={require('../../images/BurulasLogo.jpg')}
            />
            <View style={biletAlStyle}>
                { this.renderIcon() }
            </View>
            <View style={drawerStyle}>
                <Entypo.Button 
                    size={30}
                    name="menu"
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => { this.props.navigation.openDrawer(); }}
                />
            </View>
        </View>);
    }
}
