
// authActions.js
export const login = () => (dispatch) => {
    dispatch({ type: 'LOGIN_SUCCESS', payload: 'token' });
    
  };
  
  // authReducer.js
  const initState = {
    user: null,
    token: localStorage.getItem('token'),
  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        localStorage.setItem('token', action.payload);
        return { ...state, token: action.payload };
      case 'LOGOUT':
        localStorage.removeItem('token');
        return { ...state, token: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  