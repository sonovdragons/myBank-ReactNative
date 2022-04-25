import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './tab/TabNavigator'

function MainNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator

//russo el telefono pertenece a a otra etapa del same 