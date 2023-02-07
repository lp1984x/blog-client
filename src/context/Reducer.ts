interface ActionProps{
    type:string,
    payload:any
}

 const Reducer = (state:any, action:ActionProps)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFetching:true,
                error:false
            }
            case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                isFetching:false,
                error:false
            }
            case "LOGIN_FAILUR":
            return{
                user:null,
                isFetching:false,
                error:true
            }
            case "LOGOUT":
            return{
                user:null,
                isFetching:false,
                error:false
            }
        default:
            return state}
}

export default Reducer