/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {

        case 'ADD_USER':
            return {
                ...state,
                users:[action.payload,...state.users]
            }
        
        case 'GET_ALL_USERS':
            return {
                ...state,
                users:action.payload
            }
        
        case 'GET_USER_BY_ID':
            return {
                ...state,
                user:action.payload
            }
        case 'GET_USERS_COUNT':
            return {
                ...state,
                usersCounter:action.payload
            }
        case 'DELETE_USER_BY_ID':
            return {
                ...state,
                users:state.users.filter((user)=>{user.id !== action.payload})
            }
        case 'DELETE_USERS':
            return {
                ...state,
                users:[]
            }
    
        default:
            break;
    }
}