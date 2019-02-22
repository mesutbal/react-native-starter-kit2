import React from 'react';
import { View } from 'react-native';


export default class NeredeyimPage extends React.Component {

    state = {
        watchId: 0
    }
    componentDidMount() {
        const id = navigator.geolocation.watchPosition((position) => {
            console.log(position);
        }, (err) => {
            console.log(err);
        }, {
            enableHighAccuracy: false,
            timeout: 200000,
            maximumAge: 1000
        });
        this.setState({ watchId: id });
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.state.watchId);
    }

    render() {
        return (<View style={{ flex: 1, backgroundColor: 'red' }} />);
    }
}

