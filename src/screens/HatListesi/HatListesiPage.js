import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
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
            this.setState({ loaded: true, hat: response.data });
        });
    }

    renderLoading() {
        return (<View style={styles.containerStyle}>
            <View style={styles.subContainerStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={require('../../images/loader.gif')} 
                />
                <Text style={styles.textStyle}>Yükleniyor...</Text>
            </View>
        </View>);
    }

    renderList() {
        return (<FlatList
            data={this.state.hat}
            renderItem={(item) => {
                return (<Text>{item.HatAdi}</Text>);
            }}
            keyExtractor={item => item.HatId}
        />
        );
    }

    render() {
        if (this.state.loaded) {
            return this.renderList();
        } 
        return this.renderLoading();
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    subContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        resizeMode: 'contain'
    },
    textStyle: {
        marginTop: 10,
        fontSize: 16
    }
});

