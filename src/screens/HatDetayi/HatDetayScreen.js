import React from 'react';
import { View, Alert, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import LoaderView from '../../components/LoaderView';


export default class HatDetayScreen extends React.Component {

    state = {
        data: {},
        duraklar: [],
        duraklar2: [],
        startLat: 40.1973248,
        startLng: 29.0553856,
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
            //Ring duraklar için düzenleme yapılacak
            const durak = response.data.sts[Object.keys(response.data.sts)[0]];
            let durak2 = [];

            console.log(Object.keys(response.data.sts));
            if (Object.keys(response.data.sts).length > 1) {
                console.log(response.data.sts[Object.keys(response.data.sts)[1]]);
                durak2 = response.data.sts[Object.keys(response.data.sts)[1]];
            }

            if (!this.state.loaded) {
                this.setState({ 
                    data: response.data, 
                    duraklar: durak, 
                    duraklar2: durak2,
                    loaded: true, 
                    startLat: response.data.data[0].snappedLocation.Lat, 
                    startLng: response.data.data[0].snappedLocation.Lng 
                });    
            } else {
                this.setState({ data: response.data, loaded: true });     
            }
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
    
    renderCizim2() {
        if (this.state.loaded && this.state.data.lrd.length > 1) {
            const c = [];
            this.state.data.lrd[1].tracks.map((track) => {
                c.push({
                    latitude: track.Lat,
                    longitude: track.Lng
                });
                return null;
            });
            return (<Polyline 
                coordinates={c}
                strokeColor="green"
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

    renderDuraklar2() {
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
                    latitude: this.state.startLat,
                    longitude: this.state.startLng
                },
                altitude: 2000,
                zoom: 12,
                pitch: 1,
                heading: 1
            }}
        >
        { this.renderCizim() }
        { this.renderCizim2() }
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

