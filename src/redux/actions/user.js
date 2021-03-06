import { userApi } from 'utils/api'

const actions = {
    setUserData: data => ({
        type: 'USER:SET_DATA',
        payload: data
    }),
    setIsAuth: data => ({
        type: 'USER:SET_IS_AUTH',
        payload: data
    }),
    fetchUserData: ()=>dispatch => {
        userApi.getMe().then(({data})=>{
            dispatch(actions.setUserData(data))
        })
    },
    fetchUserSignin: postData => dispatch => {
        return userApi.signin(postData).then(({data}) => {
            const {token} = data
            window.axios.defaults.headers.common["token"] = token
            window.localStorage["token"] = token
            dispatch(actions.fetchUserData())
        })
    },
    fetchUserRegister: postData => dispatch => {
        return userApi.signup(postData).then(({data}) => {
            const {token} = data
            window.axios.defaults.headers.common["token"] = token
            window.localStorage["token"] = token
            dispatch(actions.fetchUserData())
        })
    }
}

export default actions;