import {combineReducers} from 'redux'
import {handleProgressBar} from './RegisterationProgressbar'
import {handleForgetPasswordProgress} from './ForgetPasswordProgressReducer'
const appReducers = combineReducers ({
    handleProgressBar,
    handleForgetPasswordProgress
})


export default appReducers