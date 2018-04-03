const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_NOT_LOGGEDIN':
            return {}
        case 'USER_LOGGEDIN':
            return Object.assign({}, state, { data: action.payload })
        case 'USER_SIGNUP':
            return Object.assign({}, state, { userCreating: true })
        case 'USER_SIGNUP_SUCCEED':
            debugger;
            return Object.assign({}, state, { data: action.payload })
        default:
            return {}
    }
}

export default userReducer;
