import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import {selectCard} from '../store/actions/cards.action'

function BankCards() {
    const dispatch = useDispatch()
    const categoryCards = useSelector(state => state.cards.filtered)
    const category = useSelector(state => state.users.selected)

    const handlerSelectedCard = (item) => {
        dispatch (selectCard(item.id))
        navigation.push("BankCardReducer", {name: item.brand})
    }

    const renderGridItem =(itemData) =>{
        <CategoryGridTile
            item={itemData.item}
            onSelected={handlerSelectedCard}
        />
    }
    return (
        <View>
            <FlatList
                data={categoryCards}
                leyExtractor={(item) => item.id.toString()}
                renderUser={renderUser}
                />
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
export default BankCards