import * as Types from '../constraints/LoginCST'

export const actRegisterProgress= (numberProgress)=>{
    return{
        type: Types.Register_PROGRESS,
        numberProgress
    }
}

export const actForgetPassword= (numberProgress)=>{
    return{
        type: Types.FORGET_PASSWORD_PROGRESS,
        numberProgress
    }
}