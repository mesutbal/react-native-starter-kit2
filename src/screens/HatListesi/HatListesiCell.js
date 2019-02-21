import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HatListesiCell extends Component {

    detayEkranAc() {
        this.props.navigation.navigate('Detay', { hat: this.props.hat });
    }

    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <TouchableOpacity style={viewStyle} onPress={() => { this.detayEkranAc(); }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FontAwesome5
                        name='bus'
                        size={25}
                    />
                </View>
                <View style={{ flex: 5 }}>
                    <Text style={textStyle}>{this.props.hat.HatAdi}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <FontAwesome5
                        name='angle-right'
                        size={25}
                        color='grey'
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500'
    }
});
