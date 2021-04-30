/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {

        case 'ADD_QUESTION':
            return {
                ...state,
                questions:[...state.questions,action.payload]
            }
        
        case 'GET_ALL_QUESTIONS':
            return {
                ...state,
                questions:action.payload.sort((a, b) => {
                    return b.views - a.views
                })
            }
        
        case 'GET_QUESTION_BY_ID':
            return {
                ...state,
                question:action.payload
            }
        case 'GET_QUESTIONS_COUNT':
            return {
                ...state,
                questionsCounter:action.payload
            }
        case 'DELETE_QUESTION_BY_ID':
            return {
                ...state,
                questions:state.questions.filter((question)=>{question.id !== action.payload})
            }
        case 'DELETE_QUESTIONS':
            return {
                ...state,
                questions:[]
            }

        case 'SET_CURRENT_QUESTION':
            return{
                    ...state,
                    currentQuestion:action.payload
                }
        case 'CLEAR_CURRENT_QUESTION':
            return{
                    ...state,
                    currentQuestion:null
                }
        
            default:
                return state
        }
}