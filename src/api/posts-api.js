import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/posts'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const posts = Object.values(result);

    return posts;
}

export const getOne = (postId) => request.get(`${BASE_URL}/${postId}`);

const postsAPI = {
    getOne,
    getAll,
};

export default postsAPI;
