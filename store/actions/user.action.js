export const SELECTED_USER = 'SELECTED_USER'
export const FILTERED_USER = 'FILTERED_USER'

export const selectUser = (id) => ({
    type: SELECTED_USER,
    userID: id
})

export const filteredUser = (id) => ({
    type: FILTERED_USER,
    bankCardID: id
})