import 'react-native-gesture-handler'; // Não colocar nada acima dessa linha!!!!!!

import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './component/Home';
import List from './component/List';
import CreateNewList from './component/CreateNewList'

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
        {/*<Drawer.Navigator initialRouteName="Home">*/}
        <Drawer.Navigator initialRouteName="List">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="List" component={List} />
          <Drawer.Screen name="Nova lista..." component={CreateNewList} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
