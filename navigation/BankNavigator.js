import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Scan from '../Screens/Scan'
import SignUp from '../Screens/SignUp'
import AccountMovements from '../Screens/AccountMovements'
import BankCards from '../Screens/BankCards'

const Stack = createNativeStackNavigator()

const BankNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Movimientos" component={AccountMovements} />
                <Stack.Screen name="Tarjetas" component={BankCards} />
                <Stack.Screen name="Scan" component={Scan} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default BankNavigator