
const initialState = {
    articles: [],
    loading: false,
}


const articleReducer = (state = initialState, action) => {
    console.log('articleReducer',action);
    switch (action.type) {
      case 'GET_ARTICLE':
        return {
          ...state,
          articles: action.payload,
        };
      case 'SET_LOADING_STATUS':
        return {
          ...state,
          loading: action.status,
        };
      default:
        return state;
    }
  };
  
  export default articleReducer;