const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_SIGNUP':
            return Object.assign({}, state, { userCreating: true })
        case 'USER_SIGNUP_SUCCEED':
            return {}
        default:
            return {}
    }
}

export default userReducer;
