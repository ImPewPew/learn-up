

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
import Home from "../screens/Home"
import Quiz from "../screens/Quiz"
import QuizQuestions from "../screens/QuizQuestions"
import Setting from "../screens/Setting";

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
                               onPress={() => navigation.navigate('Home')}
                           />
                       </View>
                   ),
               })}
           />

           <Stack.Screen
               name="Home"
               component={Home}
               options={({navigation}) => ({
                   title: 'Home',
                   headerStyle: {
                       backgroundColor: '#f9fafd',
                       shadowColor: '#f9fafd',
                       elevation: 0,
                   },

               })}
           />

           <Stack.Screen
               name="Quiz"
               component={Quiz}
               options={({navigation}) => ({
                   title: 'Quiz',
                   headerStyle: {
                       backgroundColor: '#f9fafd',
                       shadowColor: '#f9fafd',
                       elevation: 0,
                   },

               })}
           />

           <Stack.Screen
               name="QuizQuestions"
               component={QuizQuestions}
               options={({navigation}) => ({
                   title: 'Quiz Questions',
                   headerStyle: {
                       backgroundColor: '#f9fafd',
                       shadowColor: '#f9fafd',
                       elevation: 0,
                   },

               })}
           />




       </Stack.Navigator>
    );
};

export default AuthStack
