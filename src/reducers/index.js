import { combineReducers } from 'redux'
import { todo } from './todoReducers'

const reducers = combineReducers({ todo })

export default reducers