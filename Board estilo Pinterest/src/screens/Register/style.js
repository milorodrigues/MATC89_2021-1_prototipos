import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.dark,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 200,
        height: 200,
        borderRadius: 10,
        width: '100%'
    },

    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: colors.light,
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 15
    },

    link: {
        color: colors.light,
        marginTop: 5
    }
});