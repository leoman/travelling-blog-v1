import RequestService from './requestService';
import { PostModel } from '../models/PostModel';

const BASE_URL = "http://localhost:3010/api"

class NetworkService {

    getPosts() {
        const url = `${BASE_URL}/posts`;
        return RequestService.getRequest(url);
    }

    getPost(id: number) {
        const url = `${BASE_URL}/posts/${id}`;
        return RequestService.getRequest(url);
    }

    editPost(id: number, data: PostModel) {
        const url = `${BASE_URL}/posts/${id}`;
        return RequestService.putData(url, data);
    }

}

export default new NetworkService()