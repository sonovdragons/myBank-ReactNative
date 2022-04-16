import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Colors from '../constants/color'

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.cardIncome}>
                <Text>SALDO</Text>
            </View>
            <View style={styles.cardMovements}>
                <Text>Movimientos</Text>
                <Button title='Ir a movimientos'  color={Colors.primary} onPress={()=> {
                    navigation.navigate('Movimientos')
                }} />
            </View>
            <View style={styles.cardCards}>
                <Text>Tarjetas</Text>
                <Button title='Ir a Tarjetas' color={Colors.primary} onPress={() => {
                    navigation.navigate('Tarjetas')
                }} />
            </View>
            <View>
                <Text>Beneficios</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'open-sans-bold'
        },
    cardIncome: {
        flex:2,
        padding: 20,
        margin: 10,
        minWidth: 300,
        width: '80%',
        maxWidth: 1920,
        height: 200,
        borderRadius: 20,
        backgroundColor: Colors.white
    },
    cardMovements: {
        flex:2,
        padding: 20,
        margin: 10,
        minWidth: 300,
        width: '80%',
        maxWidth: 1920,
        height: 200,
        borderRadius: 20,
        backgroundColor: Colors.white
    },
    cardCards: {
        flex:2,
        padding: 20,
        margin: 10,
        minWidth: 300,
        width: '80%',
        maxWidth: 1920,
        height: 200,
        borderRadius: 20,
        backgroundColor: Colors.white
    }
    });

export default Home