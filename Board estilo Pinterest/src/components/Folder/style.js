import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default StyleSheet.create({
    folder: {
        width: '50%',
        paddingHorizontal: 7
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 15,
        width: '100%',
        marginBottom: 5
    },
    title: {
        color: colors.light,
        fontWeight: 'bold'
    },
    description: {
        color: colors.light,
        fontSize: 13
    },
    time: {
        color: colors.gray
    }
});