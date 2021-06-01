import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../style/style'

class CreateNewList extends Component {
    render() {
        return(
            <View style={styles.view}>
                <Text>Nova lista</Text>
            </View>
        );
    }
}

export default CreateNewList;