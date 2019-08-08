// inital state
const initalState = {
    username: '',
    email: '',
    accountBalance: 0,
    transaction: []
}

// Action Constants

// Action Builders

// Reducer
export default (state = initalState, action) => {
    const {type, payload} = action
    switch (type) {
        default: return state 
    }
}   