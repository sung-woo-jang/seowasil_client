export const reformatPhoneNumber = (phoneNumber: string | number) =>
    `${phoneNumber}`.replace(/-/g, ''); // '-' 제거
