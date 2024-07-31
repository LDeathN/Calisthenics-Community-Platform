import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/users';

export const getOne = (userId) => request.get(`${BASE_URL}/${userId}`);

const profileAPI = {
    getOne,
};

export default profileAPI;