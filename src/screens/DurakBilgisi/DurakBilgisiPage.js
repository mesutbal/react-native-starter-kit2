import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class DurakBilgisiPage extends React.Component {

    karekodOku(e) {
        this.props.navigation.navigate('HatListesi');
    }

    render() {
        return (
        <View style={{ flex: 1 }} >
            <QRCodeScanner 
                reactivate
                onRead={this.karekodOku.bind(this)}
                topContent={
                    <Text style={{ flex: 1, fontSize: 16, marginTop: 20 }}>
                        Lütfen karekodu okutunuz
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={{ padding: 20 }}>
                        <Text style={{ fontSize: 20, paddingTop: 30 }}>Vazgeç</Text>
                    </TouchableOpacity>
                }
            />
        </View>);
    }
}
