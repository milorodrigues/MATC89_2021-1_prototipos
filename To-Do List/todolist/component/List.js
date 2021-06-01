import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../style/style'

class List extends Component {
    render() {
        return(
            <View style={styles.view}>
                <Text>List</Text>
            </View>
        );
    }
}

export default List;