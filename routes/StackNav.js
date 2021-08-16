import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from "../screens/Home";
import Ambulance from "../screens/Ambulance";
import Hospitals from "../screens/Hospitals";
import Pharmacy from "../screens/Pharmacy";
import ChatBot from "../screens/ChatBot";


const Stack = createStackNavigator()


const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName={'Home'}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Ambulance' component={Ambulance} />
                <Stack.Screen name='Hospitals' component={Hospitals} />
                <Stack.Screen name='Pharmacy' component={Pharmacy} />
                <Stack.Screen name='Chatbot' component={ChatBot} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default StackNav