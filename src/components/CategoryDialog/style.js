import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px 1fr;
    width: 640px;
    height: 570px;
`;

export const AddCategory = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / 3;
    border-bottom: 1px solid #000;
    padding: 0 10px;
    & input {
        flex-grow: 1;
        margin: 0 20px;
        padding: 10px 5px;
        border: solid 1px #e2e2e2;
    }
`;
export const CategoryList = styled.div`
    border-right: 1px solid gray;
    padding-top: 10px;
`;

export const CategoryItem = styled.div`
    padding-top: 5px;
    padding-left: 15px;
`;

export const CategoryEditor = styled.div`
    padding-top: 10px;
`;

export const CategoryTextFiled = styled(TextField)`
    padding-left: 15px;
    margin-left: 15px;
`;
