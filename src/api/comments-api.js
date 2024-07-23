import requester, { post } from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/posts';

const buildUrl = (postId) => `${BASE_URL}/${postId}/comments`;

const create = async (postId, username, text) => requester.post(buildUrl(postId), {username, text});

const getAll = async (postId) => {
    const result = await requester.get(buildUrl(postId));
    const comments = Object.values(result);

    return comments;
}

export default {
    create,
    getAll,
}