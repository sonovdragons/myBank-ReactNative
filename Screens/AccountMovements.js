import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Colors from '../constants/color'
import UserScreen from './UserScreen'

function AccountMovements({navigation}) {
    return (
        <View>
            <Text>AccountMovements</Text>
            
            <Button title='Volver a Home' color={Colors.primary} onPress={() => {
                navigation.navigate('Home')
            }} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AccountMovements