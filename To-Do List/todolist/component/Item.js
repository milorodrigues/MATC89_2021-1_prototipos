import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from '../style/style'
import itemStyles from '../style/Item.style'

class Item extends Component{

    state = {
        text: '',
        status: false
    }

    constructor(props) {
        super(props);
        this.state.text = props.text;
    }

    render() {
        return(
            <View style={itemStyles.view}>
                <CheckBox />
                <Text style={itemStyles.text}>{this.state.text}</Text>
            </View>
        );
    }
}

export default Item;