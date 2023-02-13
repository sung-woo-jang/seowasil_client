import { Search as MuiSearch } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const color = {
    blue: '#287bff',
    white: '#fff',
    grey: '#f5f5f5',
    black1: '#222',
    black2: '#999',
};

// main
export const DashBoardWrapper = styled.div`
    position: absolute;
    width: calc(100% - 300px);
    left: 300px;
    min-height: 100vh;
    transition: 0.5s;
    background: #eeeeee;
`;
/*  
    나중에 위로 올리기
    ${({ toggle }) =>
        toggle &&
        css`
            width: calc(100% - 80px);
            left: 80px;
        `}
    @media screen and (max-width: 991px) {
        width: 100%;
        left: 0;

        ${({ toggle }) =>
        toggle &&
        css`
            left: 300px;
        `}
    } */
export const TopBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;
/* export const Toggle = styled.div`
    position: relative;
    top: 0;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5em;
    cursor: pointer;
    @media screen and (max-width: 480px) {
        z-index: 10001;

        ${({ toggle }) =>
            toggle &&
            css`
                & svg path {
                    position: fixed;
                    right: 0;
                    left: initial;
                    color: ${color.white};
                }
            `}
    }
`; */

export const Search = styled.div`
    position: relative;
    width: 400px;
    margin: 0 10px;

    & label input {
        width: 100%;
        height: 40px;
        border-radius: 40px;
        padding: 5px 20px;
        font-size: 20px;
        padding-left: 40px;
        outline: none;
        border: 1px solid ${color.black2};
    }

    & svg {
        font-size: 30px;
    }
`;

export const SearchIcon = styled(MuiSearch)`
    position: absolute;
    top: 5px;
    left: 10px;
`;

export const User = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 480px) {
        min-width: 40px;
    }
`;

export const CardBox = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Card = styled.div`
    position: relative;
    background: ${color.white};
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);

    &:hover {
        background: ${color.blue};
        & * {
            color: ${color.white};
        }
    }
`;
export const Numbers = styled.div`
    position: relative;
    font-size: 2.5em;
    color: ${color.blue};
`;
export const CardName = styled.div`
    color: ${color.black2};
    font-size: 1.1em;
    margin-top: 5px;
`;
export const IconBox = styled.div`
    color: ${color.black2};
    & svg {
        font-size: 3.5em;
    }
`;

// order details list
export const Details = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    /* margin-top: 10px; */
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
export const RecentOrders = styled.div`
    position: relative;
    display: grid;
    min-height: 500px;
    background: ${color.white};
    padding: 20px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
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
    /* font-weight: 600; */
    color: ${color.blue};
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;
export const DetailButton = styled(Link)`
    position: relative;
    padding: 5px 10px;
    background: ${color.blue};
    text-decoration: none;
    color: ${color.white};
    border-radius: 6px;
`;

export const OrderTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;

    & tr:last-child {
        border-bottom: none;
    }

    & tr td {
        padding: 10px;

        &:last-child {
            text-align: end;
        }
        &:nth-child(2) {
            text-align: center;
        }
        &:nth-child(3) {
            text-align: center;
        }
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

export const RecentCustomers = styled.div`
    position: relative;
    display: grid;
    min-height: 500px;
    padding: 20px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    background: ${color.white};
`;

export const RecentCustomersTableRow = styled.tr`
    & td {
        padding: 12px 10px;
        & h4 {
            font-size: 16px;
            /* font-weight: 500; */
            line-height: 1.2em;
            & span {
                font-size: 14px;
                color: ${color.black2};
            }
        }
    }

    &:hover {
        background-color: ${color.blue};
        color: ${color.white};

        & td h4 span {
            color: ${color.white};
        }
    }
`;

export const CustomerImageBox = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
