import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Services from './screens/Services';
import Cart from './screens/Cart';

import { colors } from './style';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    )
}

export default Routes;