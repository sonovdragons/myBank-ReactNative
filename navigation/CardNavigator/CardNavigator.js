import React from 'react'
import {Platform} from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import BankCards from '../../Screens/BankCards'
import Colors from '../../constants/color'


const Stack = createNativeStackNavigator()

const CardNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cards"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accent,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen
                name="Cards"
                component={BankCards}
                options={{title: 'Tarjetas'}}
            />
        </Stack.Navigator>
    )
}

export default CardNavigator