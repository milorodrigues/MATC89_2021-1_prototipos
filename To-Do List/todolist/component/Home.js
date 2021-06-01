import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../style/style'

class Home extends Component {
    render() {
        return(
            <View style={styles.view}>
                <Text>Hello World</Text>
            </View>
        );
    }
}

export default Home;