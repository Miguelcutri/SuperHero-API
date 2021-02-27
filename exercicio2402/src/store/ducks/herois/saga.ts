import { call, put } from "redux-saga/effects"
import { getHeroisSuccess, getHeroisError } from "./action"
import HeroisService from '../../../services/hero-service'
import Toast from 'react-hot-toast'
import { AxiosResponse } from "axios"


export function* getHerois(acao: any){

    try{
        const resposta: AxiosResponse = yield call(HeroisService.getHerois, acao.payload)
        yield put(getHeroisSuccess(resposta.data))
    } catch(erro) {
        Toast.error('Não foi possível carregar as cervejas')
        yield put(getHeroisError())
    }
    }
