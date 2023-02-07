export const LoginStart = <T>(userCredentials:T)=>({
    type:"LOGIN_START"
})

export const LoginSuccess = <T>(user:T) =>({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailur = ()=>({
    type: "LOGIN_FAILUR"
})

export const Logout= ()=>({
    type: "LOGOUT"
})