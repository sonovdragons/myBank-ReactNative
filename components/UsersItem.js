import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Color from '../constants/color'


function UsersItem({item}) {
    return (
        <View>
            <View style={styles.item}>
                <Text style={styles.header}>{item.name} + " " + {item.lastName}</Text>
            </View>
            <View style={styles.detail}>
                <Text>Numero de Cuenta: {item.bankAccountNumber}</Text>
                <Text>{item.bankAccount}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#74338F"
    },
    header: {
        fontSize: 18,
        fontFamily: 'OpenSansBold'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text:{
        fontSize: 16,
        fontFamily: 'OpenSans'
    }
})

export default UsersItem