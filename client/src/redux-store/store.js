import {createStore} from 'redux'
import LoginReducer from '../components/LoginForm/states/reducer'
export const loginStore= createStore(LoginReducer)