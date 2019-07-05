import RequestService from './requestService';
import { PostModel, Status } from '../models/PostModel';
import { LoginModel } from '../models/LoginModel';

// const BASE_URL = "http://localhost:3010/api"
const BASE_URL = "https://travelling-api-blink.herokuapp.com/api";

class NetworkService {

    async login(data: LoginModel) {
        const url = `${BASE_URL}/auth/login`;
        const response: any = await RequestService.post(url, data);
        if (response.auth) {
            localStorage.setItem('token', response.token);
        }
        return response;
    }

    getPosts() {
        const url = `${BASE_URL}/posts`;
        return RequestService.get(url);
    }

    getLivePosts() {
        const url = `${BASE_URL}/posts?status=${Status.live}`;
        return RequestService.get(url);
    }

    getPost(id: number) {
        const url = `${BASE_URL}/posts/${id}`;
        return RequestService.get(url);
    }

    getPostBySlug(slug: string) {
        const url = `${BASE_URL}/posts/slug/${slug}`;
        return RequestService.get(url);
    }

    addPost(data: PostModel) {
        const url = `${BASE_URL}/posts`;
        return RequestService.post(url, data);
    }

    editPost(id: number, data: PostModel) {
        const url = `${BASE_URL}/posts/${id}`;
        return RequestService.put(url, data);
    }

    deletePost(id: number) {
        const url = `${BASE_URL}/posts/${id}`;
        return RequestService.delete(url);
    }

    addPhotoToPost(id: number, data: object) {
        const url = `${BASE_URL}/photos/${id}`;
        return RequestService.post(url, data);
    }

    deletePhoto(id: number) {
        const url = `${BASE_URL}/photos/${id}`;
        return RequestService.delete(url);
    }

}

export default new NetworkService()