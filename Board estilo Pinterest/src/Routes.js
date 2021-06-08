import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './screens/Login';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import Register from './screens/Register';

import { colors } from './style';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.red,
                activeBackgroundColor: colors.red,
                inactiveTintColor: colors.dark,
                inactiveBackgroundColor: colors.light,
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
                    backgroundColor: colors.light
                },
                keyboardHidesTabBar: true
            }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.light
                    },
                    headerTintColor: colors.dark,
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;