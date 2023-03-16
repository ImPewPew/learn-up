
import React from 'react';


import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from "./AuthStack";

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
}
