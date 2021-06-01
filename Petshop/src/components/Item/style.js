import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default StyleSheet.create({
    information: {
        padding: 24
    },
    name: {
        color: colors.orange,
        fontWeight: 'bold',
        fontSize: 16
    },
    price: {
        color: colors.purple,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'right'
    },
    description: {
        color: colors.dark,
        fontSize: 16,
        marginRight: 8
    },
    cart: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    value: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap'
    },
    quantity: {
        width: 42
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    }
});