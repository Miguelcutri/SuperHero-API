
import { Reducer } from 'redux'
import {HeroisTypes} from './types'

const ESTADO_INICIAL: any = {
    objetoHerois: {},
    loading: false
}

const reducer: Reducer = (estado = ESTADO_INICIAL , acao) =>{
    switch (acao.type){
        case HeroisTypes.GET_HEROIS_REQUEST:
            return{
                ...estado,
                loading: true
            }
        case HeroisTypes.GET_HEROIS_SUCCESS:
            return{
                ...estado,
                objetoHerois: acao.payload,
                loading:false
            }
        case HeroisTypes.GET_HEROIS_FAILURE:
            return{
                ...estado,
                loading: false
                
            }
            default:
                return estado
    }    
}
export default reducer;
