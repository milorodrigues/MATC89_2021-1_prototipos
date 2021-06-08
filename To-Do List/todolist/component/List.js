import React, { Component, useState } from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    View
} from 'react-native';

import Item from './Item'

import styles from '../style/style'
import listStyles from '../style/List.style'

class List extends Component {

    state = {
        tasks: [
            {id: '1', text: 'Sair com o cachorro', color: '#ffffff'},
            {id: '2', text: 'Fazer mercado', color: '#ffffff'},
            {id: '3', text: 'Terminar trabalho app', color: '#ffffff'},
            {id: '4', text: 'Pagar boletos', color: '#ffffff'},
            {id: '5', text: 'Ligar pra vó', color: '#ffffff'},
            {id: '6', text: 'Comprar presente do sobrinho', color: '#ffffff'},
            {id: '7', text: 'Colocar crédito no celular', color: '#ffffff'},
            {id: '8', text: 'Devolver livros na biblioteca', color: '#ffffff'},
        ]
    }
    
    constructor(props) {
        super(props);

        this.changeTaskBackground = this.changeTaskBackground.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRenderTask = this.handleRenderTask.bind(this);
    }

    changeTaskBackground = (id, color) => {
        let index = this.state.tasks.findIndex(element => element.id == id);
        this.state.tasks[index].color = color;
        this.setState({tasks: this.state.tasks});
    }

    deleteTask = () => {
        
    }

    handleAdd = (newTask) => {
        if (newTask.trim()) {
            let newId = parseInt(this.state.tasks[this.state.tasks.length - 1].id) + 1;
            newId = newId.toString();
            this.setState({tasks: [...this.state.tasks, {id: newId, text: newTask.trim(), color: '#ffffff'}]});
        }
    }

    handleRenderTask = ({ item }) => 
            <Item   id={item.id}
                    text={item.text}
                    backgroundColor={item.color}
                    changeTaskBackground={this.changeTaskBackground}
                    deleteTask={this.deleteTask} />

    render(){
        return (
            <SafeAreaView>
                <View style={listStyles.container}>
                    <FlatList
                        data={this.state.tasks}
                        keyExtractor={item => item.id}
                        renderItem={this.handleRenderTask}
                        style={listStyles.listContainer}
                        ListHeaderComponent={Header}
                        ListFooterComponent={<Input handleAdd={this.handleAdd}/>}
                        removeClippedSubviews={false}
                        keyboardShouldPersistTaps={'handled'}
                    />
                </View>
            </SafeAreaView>
        )
    };

}

const Header = () => {
    return (
        <Text style={listStyles.title}>To do list</Text>
    );
}

const Input = (props) => {

    const [task, updateTask] = useState('');

    return (
        <View style={listStyles.inputContainer}>
            <TextInput
                style={listStyles.field}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                onChangeText={text => updateTask(text)}
                value={task}
            />
            <TouchableWithoutFeedback onPress={() => {props.handleAdd(task); updateTask('');}}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default List;