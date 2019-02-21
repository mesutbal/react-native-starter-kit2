import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';


export default class HatDetayScreen extends React.Component {

    state = {
        data: {}
    }

    componentWillMount() {
        axios.get(`https://ulasimapi.burulas.com.tr/api/NetworkInfo/VehiclesPosition?code=${this.props.navigation.state.params.hat.HatAdi}`)
        .then(response => {
            console.log(response.data);
            this.setState({ data: response.data });    
        });
    }


    render() {
        return (
        <View style={{ flex: 1 }} >
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
            />
        </View>);
    }
}

