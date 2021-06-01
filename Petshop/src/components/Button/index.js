import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import style from './style';

const Button = ({ title, action, small = false, inverted = false }) => {
    const styleDefault = style(small, inverted);

    return (
        <TouchableOpacity onPress={ action } style={styleDefault.button}>
            <Text style={styleDefault.title}>{ title }</Text>
        </TouchableOpacity>
    ) 
}

export default Button;