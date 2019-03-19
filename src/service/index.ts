import RequestService from './requestService';
import { PostModel } from '../models/PostModel';
import { LoginModel } from '../models/LoginModel';

const BASE_URL = "http://localhost:3010/api"

class NetworkService {

    async login(data: LoginModel) {
        const url = `${BASE_URL}/auth/login`;
        const response: any = await RequestService.postData(url, data);
        if (response.auth) {
            localStorage.setItem('token', response.token);
        }
        return response;
    }

    getPosts() {
        const url = `${BASE_URL}/posts`;
        return RequestService.getRequest(url);
    }

    getPost(id: number) {
        const url = `${BASE_URL}/posts/${id}`;
        return RequestService.getRequest(url);
    }

    getPostBySlug(slug: string) {
        const url = `${BASE_URL}/posts/slug/${slug}`;
        return RequestService.getRequest(url);
    }

    addPost(data: PostModel) {
        const url = `${BASE_URL}/posts`;
        return RequestService.postData(url, data);
    }

    editPost(id: number, data: PostModel) {
        const url = `${BASE_URL}/posts/${id}`;
        return RequestService.putData(url, data);
    }

}

export default new NetworkService()