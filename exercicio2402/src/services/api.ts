import axios from "axios"

const URL = "https://www.superheroapi.com/api.php/100185885467083/search"

const api = axios.create({
  baseURL: URL
})

export default api