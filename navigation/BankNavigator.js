import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Scan from '../Screens/Scan'
import SignUp from '../Screens/SignUp'

const Stack = createNativeStackNavigator()

function BankNavigator() {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Scan" component={Scan} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default BankNavigator