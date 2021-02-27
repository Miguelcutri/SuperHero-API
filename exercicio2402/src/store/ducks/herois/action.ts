import {action} from 'typesafe-actions'
import { HeroisArray, HeroisTypes} from './types'

export const getHeroisError = () => action(HeroisTypes.GET_HEROIS_FAILURE)
export const getHeroisSuccess = (user: HeroisArray) => action(HeroisTypes.GET_HEROIS_SUCCESS, user)
export const getHeroisRequest = (user: any) => action(HeroisTypes.GET_HEROIS_REQUEST, user)