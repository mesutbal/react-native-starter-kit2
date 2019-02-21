import React from 'react';
import { View, Alert, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import LoaderView from '../../components/LoaderView';


export default class HatDetayScreen extends React.Component {

    state = {
        data: {},
        duraklar: [],
        loaded: false
    }

    otobusTimer = {}

    componentWillMount() {
        this.refreshData();
    }   

    componentWillUnmount() {
        clearInterval(this.otobusTimer);
    }

    refreshData() {
        //timeout eklenecek
        axios.get(`https://ulasimapi.burulas.com.tr/api/NetworkInfo/VehiclesPosition?code=${this.props.navigation.state.params.hat.HatAdi}`)
        .then(response => {
            if (!this.state.loaded) {
                this.otobusTimer = setInterval(() => { this.elapsed(); }, 5000);
            }
            const durak = response.data.sts[Object.keys(response.data.sts)[0]];
            this.setState({ data: response.data, duraklar: durak, loaded: true });    
        })
        .catch(error => {
            console.log(error);
            Alert.alert('Burulaş App', 'Bağlantı sağlanamadı.');
        });
    }

    elapsed() {
        console.log('elapsed');
        this.refreshData();
    }

    renderLoading() {
        return (<LoaderView />);
    }

    renderCizim() {
        if (this.state.loaded) {
            const c = [];
            this.state.data.lrd[0].tracks.map((track) => {
                c.push({
                    latitude: track.Lat,
                    longitude: track.Lng
                });
                return null;
            });
            return (<Polyline 
                coordinates={c}
                strokeColor="red"
                strokeWidth={5} 
            />);
        }
    }

    renderDuraklar() {
        return (this.state.duraklar.map((durak) => (<Marker 
                key={durak.SID}
                title={durak.SName}
                description={durak.SCode}
                coordinate={{
                    latitude: durak.SLat,
                    longitude: durak.SLng
                }}
        >
            <Image 
                source={require('../../images/marker-durak.png')} 
                style={{ height: 26, width: 19, resizeMode: 'contain' }} 
            />
        </Marker>)));
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
        { this.renderCizim() }
        { this.renderDuraklar() }
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

