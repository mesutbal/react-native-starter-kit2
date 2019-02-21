import React from 'react';
import { View, Alert } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';
import LoaderView from '../../components/LoaderView';


export default class HatDetayScreen extends React.Component {

    state = {
        data: {},
        loaded: false
    }

    componentWillMount() {
        axios.get(`https://ulasimapi.burulas.com.tr/api/NetworkInfo/VehiclesPosition?code=${this.props.navigation.state.params.hat.HatAdi}`)
        .then(response => {
            console.log(response.data);
            this.setState({ data: response.data });    
        });
    }

    renderLoading() {
        return (<LoaderView />);
    }

    renderMap() {
        return (
        <MapView
            mapType={'hybrid'}
            style={{ flex: 1 }}
            zoomEnabled
            zoomControlEnabled
            minZoomLevel={0}
            maxZoomLevel={20}

            showsUserLocation
            showsMyLocationButton

            camera={{
                center: {
                    latitude: 40.1973248,
                    longitude: 29.0553856
                },
                altitude: 2000,
                zoom: 12,
                pitch: 1,
                heading: 1
            }}
        />);
    }

    renderItem() {
        if (this.state.loaded) {
            if (this.state.data.error.Code !== 0) {
                Alert.alert('Burulaş App', `Hat bulunamadı.${this.state.data.error.Meessage}`);
            }
            return this.renderMap();
        } 
        return this.renderLoading();
    }

    render() {
        return (
        <View style={{ flex: 1 }} >
            {this.renderItem()}            
        </View>);
    }
    
}

