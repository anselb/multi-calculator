import { combineReducers } from 'redux'
import calcReducer from './calc-reducer'

const reducers = combineReducers({ calc: calcReducer })

export default reducers
