export const getUserInfoToLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    return userInfo;
};

export const saveUserInfoToLocalStorage = (user: {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
}) => {
    localStorage.setItem('userInfo', JSON.stringify(user));
};

export const removeserInfoToLocalStorage = () => {
    // 로컬 스토리지에 있는 userInfo 아이템을 삭제
    localStorage.removeItem('userInfo');
};
