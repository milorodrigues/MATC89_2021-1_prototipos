import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Item from './Item'

import styles from '../style/style'

class List extends Component {
    render() {
        return(
            <View style={styles.view}>
                <Item text="Item 1" />
            </View>
        );
    }
}

export default List;