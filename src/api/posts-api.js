import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/posts'

export const getAll = async () => request.get(BASE_URL);
