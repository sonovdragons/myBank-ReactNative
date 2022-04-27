import { BankCards } from "../../data/cards";
import { SELECT_CARD } from "../actions/cards.action";

const initalState = {
    cards: BankCards,
    filteredCard: [],
    selected: null
}

const BankCardReducer = (state = initalState, action) => {
    switch (action.type) {
        case SELECT_CARD:
            const IndexCard = state.cards.findIndex(car => car.id === action.cardID)
            if (IndexCard === 1) return state
            return {...state, selected: state.cards[IndexCard]}
        default:
            return state
    }
}

export default BankCardReducer