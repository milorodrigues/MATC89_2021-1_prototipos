import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import style from './style';
import { colors } from '../../style';

const Default = ({ children }) => {
    return (
        <>
            <SafeAreaView style={style.adjustmentTop}>
                <StatusBar backgroundColor={colors.purple} />
                { children }
            </SafeAreaView>
            <SafeAreaView style={style.adjustmentBottom} />
        </>
    )
}

export default Default;