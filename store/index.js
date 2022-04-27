import {createStore, combineReducers } from 'redux'

//reducers
import UserReducer from './reducers/usuarios.reducer'
import BankCardReducer from './reducers/bankcards.reducer'

const RootReducer = combineReducers({
    users: UserReducer,
    bankCards: BankCardReducer
})

export default createStore(RootReducer)