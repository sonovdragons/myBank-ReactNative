import React from 'react'
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Scan from '../Screens/Scan'
import SignUp from '../Screens/SignUp'
import AccountMovements from '../Screens/AccountMovements'
import BankCards from '../Screens/BankCards'
import Colors from '../constants/color'
import { Platform } from 'react-native'

const Stack = createNativeStackNavigator()

const BankNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Movimientos" component={AccountMovements} />
            <Stack.Screen name="Tarjetas" component={BankCards} />
            <Stack.Screen name="Scan" component={Scan} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default BankNavigator