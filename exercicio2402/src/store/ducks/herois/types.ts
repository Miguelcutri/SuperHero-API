export interface Herois{
    response: string,
    id:string,
    name:string,
    powerstats: powerstats,
    image: image,
    biography: biography,
    work: work
}
export interface powerstats{
  powerstats: string
}
export interface image{
  url: string
}
export interface biography {
  publisher: string
}
export interface work {
  base: string
}

export interface HeroisArray {
  data: Herois[]
  erro: boolean
  }

  

export enum HeroisTypes {
    GET_HEROIS_REQUEST = '@herois/GET_HEROIS_REQUEST',
    GET_HEROIS_SUCCESS = '@herois/GET_HEROIS_SUCCESS',
    GET_HEROIS_FAILURE = '@herois/GET_HEROIS_FAILURE',
  }