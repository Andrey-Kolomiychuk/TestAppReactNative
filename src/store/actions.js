import AsyncStorage from '@react-native-async-storage/async-storage';

export const Init = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('token')
        if (token !== null) {
        console.log('token fetched')
        dispatch ({
            type: 'LOGIN',
            payload: token, 
        })
        }
    }
}

export const Login = (username, password) => {
    return async dispatch => {
        let token = null;
        if ( password.length > 8){
            token  = username + password;
            await AsyncStorage.setItem('token', token)
            console.log('token stored')
        } 
        dispatch ({
            type: 'LOGIN',
            payload: token, 
        })
    }
}

export const Logout = () => {
    return async dispatch => {
        await AsyncStorage.clear();
        dispatch({
            type: 'LOGOUT', 
        })
    }
}

export const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
    return userToken?.token
}