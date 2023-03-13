import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';

import OnboardingScreen from "./screens/OnboardingScreen";


const AppStack = createStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <AppStack.Navigator>
            <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>

        </AppStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
