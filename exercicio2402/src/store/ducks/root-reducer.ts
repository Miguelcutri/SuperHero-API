import { combineReducers } from "redux"

import Hero from './herois'

const createRootReducer = () => combineReducers({
  Hero
})

export default createRootReducer