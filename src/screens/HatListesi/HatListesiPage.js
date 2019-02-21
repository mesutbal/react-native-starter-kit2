import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import HatListesiCell from './HatListesiCell';
import LoaderView from '../../components/LoaderView';

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
        return (<LoaderView />);
    }

    renderList() {
        return (<FlatList
            data={this.state.hat}
            renderItem={({ item }) => {
                return (<HatListesiCell hat={item} navigation={this.props.navigation} />);
            }}
            keyExtractor={item => `${item.HatId}`}
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



