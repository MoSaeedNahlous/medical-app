/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {

        case 'ADD_REPLY':
            return {
                ...state,
                replies:[action.payload,...state.replies]
            }
        
        case 'GET_ALL_REPLIES':
            return {
                ...state,
                replies:action.payload
            }
        
        case 'GET_REPLY_BY_ID':
            return {
                ...state,
                reply:action.payload
            }
        case 'GET_REPLIES_FOR_QUESTION':
            return {
                ...state,
                replies:state.replies.filter((reply)=>reply.question===action.payload)
            }
        case 'GET_REPLIES_COUNT':
            return {
                ...state,
                repliesCounter:action.payload
            }
        case 'DELETE_REPLY_BY_ID':
            return {
                ...state,
                replies:state.replies.filter((reply)=>reply.id !== action.payload)
            }
        case 'DELETE_REPLIES':
            return {
                ...state,
                replies:[]
            }
    
        default:
            break;
    }
}