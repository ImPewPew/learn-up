

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from "../screens/OnboardingScreen";
import Chat from "../screens/Chat"

const Stack = createStackNavigator()
const AuthStack = () => {
   let routeName = "Onboard";
    return (
       <Stack.Navigator initialRouteName={routeName}>
           <Stack.Screen
               name="Onboarding"
               component={OnboardingScreen}
               options={{header: () => null}}
           />

           <Stack.Screen
               name="Chat"
               component={Chat}
               options={({navigation}) => ({
                   title: 'AI Chatbot',
                   headerStyle: {
                       backgroundColor: '#f9fafd',
                       shadowColor: '#f9fafd',
                       elevation: 0,
                   },
                   headerLeft: () => (
                       <View style={{marginLeft: 10}}>
                           <FontAwesome.Button
                               name="long-arrow-left"
                               size={25}
                               backgroundColor="#f9fafd"
                               color="#333"
                               onPress={() => navigation.navigate('Onboarding')}
                           />
                       </View>
                   ),
               })}
           />

       </Stack.Navigator>
    );
};

export default AuthStack
