const INITIAL_STATE = {
  posts: {},
};

const applyPosts = (state, action) => ({
  ...state,
  posts: action.posts
});

const applyPost = (state, action) => ({
  ...state,
  posts: action.post
});




const postReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case 'RECEIVE_ALL_POSTS' : {
      return applyPosts(state, action)
    }
    case 'RECEIVE_POST' : {
      return applyPost(state, action)
    }
    // case 'CREATE_POST' : {
    //   return applySetUsers(state, action);
    // }
    default : return state;
  }
}


export default postReducer;
