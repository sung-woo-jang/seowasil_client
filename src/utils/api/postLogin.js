import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set('refreshToken', refreshToken, {
        sameSite: 'strict',
        path: '/',
        expires: new Date(expireDate),
    });
};

export const getCookieRefreshToken = () => {
    return cookies.get('refreshToken');
};

export const setAccessToken = (accessToken) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set('accessToken', accessToken, {
        sameSite: 'strict',
        path: '/',
        expires: new Date(expireDate),
    });
};

export const getCookieAccessToken = () => {
    return cookies.get('accessToken');
};

const postLogin = async (account, password) => {
    try {
        const { data } = await axios.post('users/signin', {
            account,
            password,
        });

        const { accessToken, refreshToken, user } = data['data'];

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
};

export default postLogin;
