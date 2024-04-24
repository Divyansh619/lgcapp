import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './MainNavigation';
const AppNavigator = () => {
    return (
        <NavigationContainer>
            < MainStack />
        </NavigationContainer>
    );
}

export default AppNavigator