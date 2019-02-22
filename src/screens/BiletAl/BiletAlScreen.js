import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { biletAlStyle } from '../../styles/HeaderStyle';
import LoaderView from '../../components/LoaderView';

export default class BiletAlScreen extends React.Component {

    state = {
        loading: false
    }

    render() {
        if (this.state.loading) {
            return this.renderLoading();
        }

        return this.renderKart();
    }


    renderLoading() {
        return (<LoaderView />);
    }

    renderKart() {
        const { containerStyle, textStyle, buttonStyle } = biletAlStyle;

        return (<View style={containerStyle}>
            <TextInput
                style={textStyle}
                mode="outlined"
                label='Adı Soyadı'
            />
            <TextInput
                style={textStyle}
                mode="outlined"
                label='Kart Numarası'
                secureTextEntry
            />
            <TextInput
                style={textStyle}
                mode="outlined"
                label='Son Kullanma Tarihi'
            />
            <TextInput
                style={textStyle}
                mode="outlined"
                secureTextEntry
                label='CV2'
            />
            <Button 
                icon="call-to-action"
                style={buttonStyle}
                mode="outlined"
                onPress={() => { 
                    //this.setState({ loading: true }); 
                    this.props.navigation.navigate('KareKod');
                }}
            >
                Bilet Al
            </Button>
        </View>);
    }
}
