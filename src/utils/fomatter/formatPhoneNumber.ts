export const formatPhoneNumber = (phoneNumber: string | number) =>
    `${phoneNumber}`.replace(/-/g, '').replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
