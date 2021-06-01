import React from 'react';
import { TextInput } from 'react-native';

import styleDefault from './style';

const IntegerField = ({ value, action, style }) => {
    const filter = (newValue, action) => {
        const isInteger = newValue.match(/^[0-9]+$/)

        if (!isInteger) return;

        const removeZeroLeft = newValue.replace(/^(0)(.+)/, '$2')
        action(removeZeroLeft)
    }

    return <TextInput
        style={ [styleDefault.field, style] }
        keyboardType='decimal-pad'
        selectTextOnFocus
        value={ String(value) }
        onChangeText={ newValue => filter(newValue, action) }
    />
}

export default IntegerField;