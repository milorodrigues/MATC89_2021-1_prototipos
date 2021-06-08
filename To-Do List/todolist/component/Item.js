import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from '../style/style'
import itemStyles from '../style/Item.style'

class Item extends Component{

    state = {
        id: '',
        text: '',
        status: false,
        modalVisible: false,
        backgroundColor: '#ffffff',
        style: itemStyles.view
    }

    constructor(props) {
        super(props);
        this.state.id = props.id;
        this.state.text = props.text;
        this.state.backgroundColor = props.backgroundColor;
        this.state.style = [this.state.style, {backgroundColor: props.backgroundColor}];
    }

    toggleModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    toggleStatus = (newstatus) => {
        this.setState({status: newstatus})
    }

    changeBackground = (color) => {
        this.props.changeTaskBackground(this.state.id, color);
        this.setState({style: [itemStyles.view, {backgroundColor: color}]});
    }

    render() {
        return(
            <View style={this.state.style}>
                <Modal animationType="slide"
                       transparent={true}
                       visible={this.state.modalVisible}
                       onRequestClose={() => this.toggleModalVisible(!this.state.modalVisible)}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <View style={itemStyles.colorsContainer}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                                <TouchableOpacity onPress={() => this.changeBackground('#ffffff')}>
                                    <View style={[itemStyles.colorButton, {backgroundColor: '#ffffff'}]} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.changeBackground('#ddf8ec')}>
                                    <View style={[itemStyles.colorButton, {backgroundColor: '#ddf8ec'}]} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.changeBackground('#d5cfe1')}>
                                    <View style={[itemStyles.colorButton, {backgroundColor: '#d5cfe1'}]} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.changeBackground('#ffd7d6')}>
                                    <View style={[itemStyles.colorButton, {backgroundColor: '#ffd7d6'}]} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.changeBackground('#b2f3fb')}>
                                    <View style={[itemStyles.colorButton, {backgroundColor: '#b2f3fb'}]} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.changeBackground('#fffac2')}>
                                    <View style={[itemStyles.colorButton, {backgroundColor: '#fffac2'}]} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.toggleModalVisible(!this.state.modalVisible)} >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>Close</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <CheckBox value={this.state.status}
                          onValueChange={() => this.toggleStatus(!this.state.status)} />
                <Text style={itemStyles.text}>{this.state.text}</Text>
                <TouchableOpacity onPress={() => this.toggleModalVisible(!this.state.modalVisible)}>
                    <Image source={require('../resources/brushIcon.png')}
                           style={itemStyles.imageButton}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../resources/trashIcon.png')}
                           style={itemStyles.imageButton}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Item;