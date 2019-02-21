import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';


export default class HatDetayScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1 }} >
            <MapView
                mapType={'hybrid'}
                styles={{ flex: 1, backgroundColor: 'red' }}
                zoomEnabled
                zoomControlEnabled
                minZoomLevel={0}
                maxZoomLevel={20}

                showsUserLocation
                showsMyLocationButton

                initialRegion={{
                    latitude: 40.1973248,
                    longitude: 29.0553856,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.05
                }}

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

