import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import QRCode from 'react-native-qrcode';


export default class QrScreen extends React.Component {

    state = {
        data: 'http://www.bursa.bel.tr'
    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <QRCode
                size={250}
                value={this.state.data}
                bgColor='black'
                fgColor='white'
            />
            <Button 
                onPress={() => { this.props.navigation.popToTop(); }}
                style={{ padding: 20 }} 
            >
                Ana Sayfaya Dön
            </Button>
        </View>);
    }
}
