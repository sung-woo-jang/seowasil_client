import { Search as MuiSearch } from '@mui/icons-material';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

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

export const TopBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

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
        background: ${Colors.SkyBlue};
        & * {
            color: ${color.white};
        }
    }
`;
export const Numbers = styled.div`
    position: relative;
    font-size: 2.5em;
    color: ${Colors.SkyBlue};
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
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 20px;
    padding: 20px;
    background: ${color.white};
    grid-gap: 30px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    min-height: 500px;
    overflow-x: auto;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const CardTitle = styled.h2`
    color: ${Colors.Black};
    font-weight: 900;
    font-size: 25px;
    @media screen and (max-width: 480px) {
        font-size: 20px;
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

export const TableContents = styled.div`
    width: 100%;
    text-align: center;
`;
