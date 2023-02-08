import styled from 'styled-components';

export const ManageProductWrapper = styled.div``;
export const ProductHeader = styled.div`
    display: flex;
    background: #fff;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderLeft = styled.div`
    padding-left: 20px;
`;
export const HeaderRight = styled.div`
    padding: 10px;
`;

export const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 20px;
`;

export const ManagedContainer = styled.div`
    background: #fff;
    padding: 15px 10px;
    height: fit-content;
`;
export const CategoryList = styled.ul`
    padding-top: 10px;
    padding-left: 30px;
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, min-content);
    grid-gap: 20px;
`;
export const ProductTable = styled.div`
    width: 100%;
    height: 400px;
`;
export const ContentNavBar = styled.ul`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    & li {
        padding: 10px 15px;
        &:hover {
            border-bottom: 2px solid #287bff;
            color: #287bff;
        }
    }
`;

export const ProductNavBar = styled.ul`
    display: grid;
    grid-template-columns: max-content 1fr repeat(7, max-content);
    align-items: center;
    background: #fff;
    & li {
        padding: 10px 15px;
    }
`;

export const TableUnderRow = styled.tr`
    color: #222;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
        background: #f7f7f7;
        color: #222;
    }

    & > * {
        padding: 10px;
    }
`;

export const TopTr = styled.tr`
    & td {
        padding: 10px;
        border-bottom: 1px solid black;
    }
`;
