import React, {useEffect, useRef} from 'react'
import { getHeroisRequest } from '../../store/ducks/herois/action'
import { useDispatch, useSelector } from 'react-redux'
import { Herois } from '../../store/ducks/herois/types'

const Hero = () =>{
    const dispatch = useDispatch()

    const { loading, objetoHerois } = useSelector((state: any) => state.herois)

    const heroi = useRef<HTMLInputElement>(null)

    const BuscaHerois = () => {
        console.log('page', heroi.current?.value)
        dispatch(getHeroisRequest(heroi.current?.value))
    }

    return(
        <div>
            { loading && <p>carregando....</p> }
      <p>Heróis</p>

      <input type="text" placeholder="Heroi" ref={heroi}/>
      <button onClick={BuscaHerois}>Buscar Herói</button>

      {objetoHerois && 
        <div>
          <p>{objetoHerois.name}</p>      
          <p>{objetoHerois.username}</p>
          <img src={objetoHerois.image}/>
        </div>      
      }
        </div>
    )
}
export default Hero;