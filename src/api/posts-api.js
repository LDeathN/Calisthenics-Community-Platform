import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/posts'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const posts = Object.values(result);

    return posts;
}

export const getOne = (postId) => request.get(`${BASE_URL}/${postId}`);

export const create = (postData) => request.post(`${BASE_URL}`, postData);

const postsAPI = {
    getOne,
    getAll,
    create,
};

export default postsAPI;
