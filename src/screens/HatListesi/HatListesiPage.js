import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';
import HatListesiCell from './HatListesiCell';
import LoaderView from '../../components/LoaderView';

export default class HatListesiPage extends React.Component {

    state = {
        hat: [],
        loaded: false,
        firstQuery: ''
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
        const { firstQuery } = this.state;

        let dataList = this.state.hat;

        if (firstQuery != null && firstQuery !== '') {
            dataList = this.state.hat.filter((h) => { 
                return h.HatAdi.includes(firstQuery.toLocaleUpperCase()) || h.HatAdi.match(firstQuery.toLocaleUpperCase()); 
            });
        }

        return (
        <View style={{ flex: 1 }}>
            <Searchbar
                    style={{ margin: 5 }}
                    placeholder="Hat No"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}
            />
            <FlatList
                data={dataList}
                renderItem={({ item }) => {
                    return (<HatListesiCell hat={item} navigation={this.props.navigation} />);
                }}
                keyExtractor={item => `${item.HatId}`}
            />
        </View>
        );
    }

    render() {
        if (this.state.loaded) {
            return this.renderList();
        } 
        return this.renderLoading();
    }
}



