import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

function AccountMovements({navigation}) {
    return (
        <View>
            <Text>AccountMovements</Text>
            <Button title="Ir a Tarjetas" onPress={() => {
                navigation.navigate('BankCards')
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