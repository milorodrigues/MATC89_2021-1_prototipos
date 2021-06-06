import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import style from './style';

const Default = ({ children, statusBarColor }) => {

    console.log(children.type);
    return (
        <>
            <SafeAreaView style={style.adjustmentTop}>
                <StatusBar backgroundColor={statusBarColor} />
                { children }
            </SafeAreaView>
            <SafeAreaView style={style.adjustmentBottom} />
        </>
    )
}

export default Default;