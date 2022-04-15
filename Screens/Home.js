import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

function Home({navigation}) {
    return (
        <View>
            <Text>SALDO</Text>
            <Text>Movimientos</Text>
            <Button title='Ir a movimientos' onPress={()=> {
                navigation.navigate('Movimientos')
            }} />
            <Text>Tarjetas</Text>
            <Button title='Ir a Tarjetas' onPress={() => {
                navigation.navigate('Tarjetas')
            }} />
            <Text>Beneficios</Text>
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
    

export default Home