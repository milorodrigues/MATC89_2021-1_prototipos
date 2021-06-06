import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 25
    },
    text: {
        fontSize: 20
    },
    title: {
        color: '#035087',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10
    },
    container: {
        padding: 20,
    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 20,
        fontSize: 20,
        color: '#000000',
        borderRadius: 5,
        // flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#00cc99',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fdfdfd',
    },
    item: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        marginTop: 15,
        borderRadius: 3,
    },
    form: {
        flexDirection: 'row',
    },
});