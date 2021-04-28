/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-anonymous-default-export

// عبارة عن جملة سويتش لمناقشة كل حالة وفي كل حالة نقوم بتعديلات على السياق بحسب الحالة
export default (state, action) => {
    switch (action.type) {

        case 'ADD_ARTICLE':
            return {
                ...state,
                articles:[...state.articles,action.payload]
            }
        
        case 'GET_ALL_ARTICLES':
            return {
                ...state,
                articles: action.payload.sort((a, b) => {
                    return b.views - a.views
                })
            }
        
        case 'GET_ARTICLE_BY_ID':
            return {
                ...state,
                article:action.payload
            }
        case 'GET_ARTICLES_COUNT':
            return {
                ...state,
                articlesCounter:action.payload
            }
        case 'DELETE_ARTICLE_BY_ID':
            return {
                ...state,
                articles:state.articles.filter((article)=>{article.id !== action.payload})
            }
        case 'DELETE_ARTICLES':
            return {
                ...state,
                articles:[]
            }
    
        default:
            break;
    }
}