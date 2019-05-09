
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
        console.log('====================================');
        console.log('Login Failed');
        console.log('====================================');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
        console.log('====================================');
        console.log('Login Success');
        console.log('====================================');
            return {
                ...state,
                authError: null
            }
        
        case 'SIGNOUT_SUCCESS':
            console.log('====================================');
            console.log('Signout success');
            console.log('====================================');
            return state;

        case 'SIGNUP_SUCCESS':
        console.log('====================================');
        console.log('signup success');
        console.log('===    =================================');
        return {
            ...state,
            authError: null
        }

        case 'SIGNUP_ERROR':
        console.log('====================================');
        console.log('signup error');
        console.log('====================================');
        return {
            ...state,
            authError: action.err.message
        }
        default:
            return state;
    }
}
export default authReducer;