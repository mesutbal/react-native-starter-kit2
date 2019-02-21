import React from 'react';
import { View, Alert, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import LoaderView from '../../components/LoaderView';


export default class HatDetayScreen extends React.Component {

    state = {
        data: {},
        loaded: false,
        timer: null
    }

    componentWillMount() {
        this.refreshData();
    }   

    refreshData() {
        axios.get(`https://ulasimapi.burulas.com.tr/api/NetworkInfo/VehiclesPosition?code=${this.props.navigation.state.params.hat.HatAdi}`)
        .then(response => {
            if (!this.state.loaded) {
                const timer = setInterval(() => { this.elapsed(); }, 5000);
                this.setState({ timer });
            }
            this.setState({ data: response.data, loaded: true });    
        });
    }

    elapsed() {
        console.log('elapsed');
        this.refreshData();
    }

    renderLoading() {
        return (<LoaderView />);
    }

    renderOtobusler() {
        return (this.state.data.data.map((bus) => (<Marker 
                key={bus.VehicleNo}
                title={`${bus.LineCode} - ${bus.VehicleNo}`}
                description={bus.lastGPSTime}
                coordinate={{
                    latitude: bus.snappedLocation.Lat,
                    longitude: bus.snappedLocation.Lng
                }}
                //image={require('../../images/marker-otobus.png')}
        >
            <Image 
                source={require('../../images/marker-otobus.png')} 
                style={{ height: 44, width: 31, resizeMode: 'contain' }} 
            />
        </Marker>)));
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
        >
        { this.renderOtobusler() }
        </MapView>);
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

