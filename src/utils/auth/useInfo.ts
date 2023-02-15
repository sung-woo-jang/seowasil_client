import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken: string) => {
    cookies.set('refreshToken', refreshToken, {
        sameSite: 'strict',
        path: '/',
    });
};

export const getCookieRefreshToken = () => {
    return cookies.get('refreshToken');
};

export const setAccessToken = (accessToken: string) => {
    cookies.set('accessToken', accessToken, {
        sameSite: 'strict',
        path: '/',
    });
};

export const getCookieAccessToken = () => {
    return cookies.get('accessToken');
};

export const setUserInfo = (user: {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
}) => {
    localStorage.setItem('userInfo', JSON.stringify(user));
};

export const getUserInfo = () => {
    // @ts-ignore
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo);
    return userInfo;
};