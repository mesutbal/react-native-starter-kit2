import { StyleSheet } from 'react-native';


export const headerStyle = StyleSheet.create({
    viewStyle: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    imageStyle: {
        width: '45%',
        margin: 5,
        top: 5,
        height: 40,
        resizeMode: 'contain',
        flex: 1
    },
    biletAlStyle: {
        position: 'absolute',
        right: 5,
        top: 10
    }
});
