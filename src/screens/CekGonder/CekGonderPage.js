import React from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import Camera from 'react-native-camera';

export default class CekGonderPage extends React.Component {

    state = {
        fotografCekildi: false,
        data: {}
    }

    fotografCek() {
        this.camera.capture()
            .then((data) => { 
                console.log(data); 
                this.setState({ fotografCekildi: true, data });
            })
            .catch((err) => console.log(err));
    }

    renderImage() {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
        <Image
            style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
            source={{ uri: this.state.data.path }}
        >
        </Image>
    </View>);
    }

    renderCamera() {
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

    render() {
        if (this.state.fotografCekildi) {
            return this.renderImage();
        }
        return this.renderCamera();
    }
}

