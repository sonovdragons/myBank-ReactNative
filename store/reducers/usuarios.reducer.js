import {USER} from '../../data/usuarios'
import { SELECTED_USER, FILTERED_USER } from '../actions/user.action'

const initalState = {
    users: USER,
    filteredUser: [],
    selected: null
}

const UserReducer = (state = initalState, action) => {
    switch (action.type) {
        case SELECTED_USER:
            return {
                ...state,
                selected: state.users.find(user => user.id === action.userID)
            }
        case FILTERED_USER:
            return {
                ...state,
                filteredUser: state.users.filter(user => user.id=== action.bankCardID)
            }
        default:
            return state
    }
}

export default UserReducer