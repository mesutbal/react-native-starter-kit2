import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';

class DurakBilgisiPage extends React.Component {

    renderCamera() {
        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return null;
        } 

        return (<QRCodeScanner 
            /*ref={(cam) => {
                this.camera = cam;
            }}*/
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
        />);
    }

    camera = null;

    karekodOku(e) {
        console.log(e);
        this.props.navigation.navigate('HatListesi');
    }

    render() {
        return (
        <View style={{ flex: 1 }} >
            { this.renderCamera() }
        </View>);
    }
}

export default withNavigationFocus(DurakBilgisiPage);
