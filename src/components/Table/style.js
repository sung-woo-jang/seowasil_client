import styled from 'styled-components';

export const TableWrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    text-align: center;
    background: white;

    & tr:last-child {
        border-bottom: none;
    }
`;
