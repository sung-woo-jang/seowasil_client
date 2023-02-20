import { TextField } from '@mui/material';
import styled from 'styled-components';

export const DialogWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    z-index: 2;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px 1fr;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 640px;
    height: 570px;
`;

export const AddCategory = styled.div`
    display: flex;
    justify-content: space-between;
    grid-column: 1 / 3;
    align-items: center;
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
    overflow: scroll;
`;

export const CategoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-left: 15px;
    & button {
        margin-right: 10px;
    }
`;

export const CategoryEditor = styled.div`
    padding-top: 10px;
`;

export const CategoryTextFiled = styled(TextField)`
    padding-left: 15px;
    margin-left: 15px;
`;
