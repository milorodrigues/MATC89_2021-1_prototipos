import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Item from './Item'

import styles from '../style/style'
import listStyles from '../style/List.style'

class List extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3']
    }

    render() {
        return(
            <View style={listStyles.view}>
                <Text style={listStyles.title}>Nome da lista</Text>
                {this.state.items.map((text, key) => {
                    return(
                        <Item text={text} />
                    );
                })}
            </View>
        );
    }
}

export default List;