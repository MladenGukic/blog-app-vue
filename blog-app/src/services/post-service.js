import axios from 'axios';

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get("posts")
    }

    getOne(id) {
        return axios.get("posts/" + id)
    }   
    
    add(post) {
        return axios.post("posts", post)
    }

    edit(id, post) {
        return axios.put("posts/" + id, post)
    }

}

export const  postService = new PostService()