import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '85d299421bac4c5eab2d082f22bedf25'
    }
})