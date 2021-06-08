import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 25
    },
    title: {
        color: '#035087',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },



    listContainer: {
        width: '90%',
        marginVertical: 15,
        flexGrow: 1
    },



    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 15
    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        fontSize: 20,
        color: '#000000', // texto
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
});