import { Link } from 'react-router-dom';
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
    min-height: 400px;
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

export const QuestionTable = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border-top: 2px solid #222;
    border-bottom: 1px solid #222;
    margin-top: 10px;
`;

export const QuestionTableTitle = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 1fr 3fr 100px;
    justify-items: center;
    align-items: center;
    border-bottom: 2px solid #222;
    padding: 10px 0;
`;

export const DetailList = styled(Link)`
    display: grid;
    grid-template-columns: 50px 1fr 1fr 3fr 100px;
    justify-items: center;
    align-items: center;
    font-size: 15px;
    border-bottom: 1px solid #222;
    padding: 5px 0;
    &:hover {
        background: #999;
    }
`;

export const TableUnderRow = styled.tr`
    color: ${color.black1};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
        background: ${color.blue};
        color: ${color.white};
    }
`;
