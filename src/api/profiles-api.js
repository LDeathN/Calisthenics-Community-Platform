import * as request from './requester';

const BASE_URL = 'http://localhost:3030/users';

export const getOne = () => request.get(`${BASE_URL}/me`);

const profileAPI = {
    getOne,
};

export default profileAPI;