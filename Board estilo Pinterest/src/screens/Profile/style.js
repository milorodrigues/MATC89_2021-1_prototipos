import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileInfo: {
        marginTop: 13
    },
    name: {
        fontSize: 27,
        color: colors.light,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    username: {
        color: colors.light,
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center'
    },
    network: {
        color: colors.light,
        textAlign: 'center'
    },
    photo: {
        width: 100,
        height: 100,
        backgroundColor: colors.gray,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filter: {
        marginVertical: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchInput: {
        backgroundColor: colors.gray,
        borderRadius: 15,
        padding: 6,
        width: '80%'
    },
    folder: {
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'column'
    },
    folderRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 13
    }
});