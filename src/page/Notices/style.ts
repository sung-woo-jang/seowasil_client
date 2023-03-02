import styled from 'styled-components';

const color = {
    blue: '#287bff',
    white: '#fff',
    grey: '#f5f5f5',
    black1: '#222',
    black2: '#999',
};

// order details list
export const Details = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
`;
export const RecentOrders = styled.div`
    position: relative;
    display: grid;
    background: ${color.white};
    padding: 20px;
    @media screen and (max-width: 768px) {
        overflow-x: auto;
    }
`;
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const CardTitle = styled.h2`
    color: ${color.black1};
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;
