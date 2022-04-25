import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BankNavigator from '../BankNavigator'
import CardNavigator from '../CardNavigator/CardNavigator'
import { NavigationContainer } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'

const BottomTabs = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <BottomTabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
            initialRouteName="Home" >
            <BottomTabs.Screen
                name="Home"
                component={BankNavigator}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={styles.item}>
                            <Ionicons name="md-home" size={24} color="black" />
                            <Text>Home</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="CardNavigator"
                component={CardNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item} >
                            <Ionicons name="md-cart" size={24} color="black" />
                            <Text>Tarjetas</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create ({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.23,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,

    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabNavigator