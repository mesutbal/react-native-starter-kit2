import React from 'react';
import { View, Image, Text, StyleSheet  } from 'react-native';

export default class LoaderView extends React.Component {

    render() {
        return (<View style={styles.containerStyle}>
            <View style={styles.subContainerStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={require('../images/loader.gif')} 
                />
                <Text style={styles.textStyle}>Yükleniyor...</Text>
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    subContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        resizeMode: 'contain'
    },
    textStyle: {
        marginTop: 10,
        fontSize: 16
    }
});