import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5
    },


    text: {
        fontSize: 20,
        flex: 1
    },


    active: {
        backgroundColor: '#ffffff',
    },
    inactive: {
        backgroundColor: '#969696',
    },

    imageButton: {
        margin: 3,
        height: 15,
        width: 15
    },

    colorsContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        //height: 100,
        borderRadius: 20,
        padding: 20,
        elevation: 20
    },
    colorButton: {
        borderRadius: 100,
        width: 30,
        height: 30,
        elevation: 5,
        margin: 5
    }
});