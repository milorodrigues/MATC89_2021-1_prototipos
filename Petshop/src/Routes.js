import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Services from './screens/Services';
import Cart from './screens/Cart';

import { colors } from './style';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.purple,
                activeBackgroundColor: colors.purple,
                inactiveTintColor: colors.light,
                inactiveBackgroundColor: colors.orange,
                style: {
                    height: 70
                },
                labelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: colors.orange
                },
                keyboardHidesTabBar: true
            }}
        >
            <Tab.Screen name="Serviços" component={Services}/>
            <Tab.Screen name="Carrinho" component={Cart}/>
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
            >
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Entrar',
                        headerStyle: {
                          backgroundColor: colors.light,
                        },
                        headerTintColor: colors.dark,
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen 
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Cadastrar',
                        headerStyle: {
                          backgroundColor: colors.light,
                        },
                        headerTintColor: colors.dark,
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Início',
                        headerStyle: {
                          backgroundColor: colors.purple,
                          elevation: 0,
                          shadowOpacity: 0 
                        },
                        headerTintColor: colors.light,
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;