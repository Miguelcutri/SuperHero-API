import { all, takeLatest } from 'redux-saga/effects'



import { HeroisTypes } from "./herois/types"
import { getHerois } from "./herois/saga"

export default function* rootSaga(): any {
    return yield all([
      takeLatest(HeroisTypes.GET_HEROIS_REQUEST, getHerois),
    ])
  }