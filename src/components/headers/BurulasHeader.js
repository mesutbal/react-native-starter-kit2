import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class BurulasHeader extends React.Component {

    render() {
        const { viewStyle, imageStyle } = styles;
        return (<View style={viewStyle}>
            <Image 
                style={imageStyle}
                source={require('../../images/BurulasLogo.jpg')}
            />
        </View>);
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        height: 87,
        backgroundColor: 'white',
        flexDirection: 'row',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    imageStyle: {
        margin: 5,
        resizeMode: 'contain'
    }
});
