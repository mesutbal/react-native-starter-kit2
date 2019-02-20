import React from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';

export default class HatListesiPage extends React.Component {

    state = {
        hat: [],
        loaded: false
    }

    componentWillMount() {
        this.getHatListesi();
    }

    getHatListesi() {
        axios.post('https://bsmapi.burulas.com.tr/HatListesi')
        .then(response => {
            console.log(response);
        });
    }

    renderLoading() {
        return (<View style={styles.containerStyle}>
            <View style={styles.subContainerStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={require('../../images/loader.gif')} 
                />
            </View>
        </View>);
    }

    renderList() {

    }

    render() {
        if (this.state.loaded) {
            return this.renderList();
        } 
        return this.renderLoading();
    }
}

