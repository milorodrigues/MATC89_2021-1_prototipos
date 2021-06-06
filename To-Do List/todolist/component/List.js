import React, {useState} from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    StyleSheet,
    View,
} from 'react-native';

import Item from './Item'

import styles from '../style/style'
import listStyles from '../style/List.style'

const List = () => {
    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);

    const handleAdd = () => {
        if (task.trim()) {
            updateTasks([...tasks, task]);
            updateTask('');
        }
    };
    const handleRenderTask = ({ item }) => <Item text={item} />




    return (
        <SafeAreaView>
            <View style={listStyles.view}>
                <Text style={listStyles.title}>To do list</Text>
                {/* {this.state.items.map((prop) => {

                            return (
                                <Item key={prop.id} text={prop.text} />
                            );
                        })} */}
                <TextInput
                    style={listStyles.field}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    onChangeText={text => updateTask(text)}
                    value={task}
                />
                <TouchableWithoutFeedback onPress={handleAdd}>
                    <View style={listStyles.button}>
                        <Text style={listStyles.buttonText}>Add</Text>
                    </View>
                </TouchableWithoutFeedback>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={handleRenderTask}
                />
            </View>
        </SafeAreaView>
    );

}

export default List;