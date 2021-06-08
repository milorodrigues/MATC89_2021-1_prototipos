import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13,
        marginHorizontal: 5
    },
    imagesRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 13
    },
    image: {
        width: '50%',
        height: 'auto',
        borderRadius: 15,
        marginHorizontal: 5
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
        width: '100%'
    }
});