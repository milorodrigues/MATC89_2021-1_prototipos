import 'react-native-gesture-handler'; // Não colocar nada acima dessa linha!!!!!!

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './component/Home';
import List from './component/List';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" backBehavior="history">
            <Drawer.Screen name="Home" component={Home} />           
            <Drawer.Screen name="List" component={List} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
