import api from "./api"

const service = {
getHerois: (heroi: any) => api.get(`/${heroi}`)
}

export default service