import React, {useEffect} from "react"
import { FlatList, TouchableOpacity, View, StyleSheet, Text } from "react-native"
import UsersItem from "../components/UsersItem"
import {USER} from '../data/usuarios'
import { useSelector, useDispatch } from "react-redux"
import { filteredUser, selectUser } from "../store/actions/user.action"
import { NavigationContainer } from "@react-navigation/native"

const UserScreen = ({navigation}) => {
    const users = {USER}

    const dispatch = useDispatch()
    const categoryUser = useSelector(state => state.user.filteredUser)
    const category = useSelector(state => state.category.selected)

    useEffect(() =>{
        dispatch(filteredUser(category.id))
    }, [])
    const handlerSelected = (user) => {
        dispatch(selectUser(user.id))
        navigation.navigate("UsersItem", {name: user.name})
    }

    const renderUser= ({users}) =>{
        <UsersItem users={users} onSelectUser={handlerSelected}/>
    }
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                data={users}
                keyExtratctor={user => user.id}
                renderUser={renderUser}
                />

            </View>

            <View>
                <TouchableOpacity style={styles.confirm}>
                    <Text>Datos</Text>
                    <View style={styles.total}>
                        <Text>Saldo: {users.bankAccount}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: "#fff",
        paddingBottom: 120
    },
    list: {
        flex: 1
    },
    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1 
    },
    confirm: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    total: {
        flexDirection: 'row'
    }
})

export default UserScreen