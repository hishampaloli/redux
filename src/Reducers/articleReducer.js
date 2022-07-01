
const initialState = {
    articles: [],
}

const articleReducer = (state = initialState, action) => {
    console.log('articleReducer',action);
    switch (action.type) {
      case 'GET_ARTICLE':
        return {
          ...state,
          articles: action,
        };
     
      default:
        return state;
    }
  };
  
  export default articleReducer;