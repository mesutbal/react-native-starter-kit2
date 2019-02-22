import React from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import Camera from 'react-native-camera';

export default class CekGonderPage extends React.Component {

    fotografCek() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    render() {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                aspect={Camera.constants.Aspect.fill}
            >
                <TouchableOpacity onPress={this.fotografCek.bind(this)}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red', marginBottom: 20 }}> Fotoğraf Çek </Text>
                </TouchableOpacity>
            </Camera>
        </View>);
    }
}

