import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default (small, inverted, large) => StyleSheet.create({
    button: {
        width: !large ? 140 : 300,
        paddingVertical: small ? 3 : 10,
        paddingHorizontal: 20,
        backgroundColor: inverted ? colors.orange : colors.purple,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 15,
        marginTop: large ? 10 : 0
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: inverted ? colors.purple : colors.orange
    }
});