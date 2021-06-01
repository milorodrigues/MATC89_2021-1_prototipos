import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../style/style'

class Home extends Component {
    render() {
        return(
            <View style={styles.view}>
                <Text style={styles.title}>To-Do List</Text>
                <Text style={styles.subtitle}>Arraste para o lado para começar</Text>
            </View>
        );
    }
}

export default Home;