import styled from 'styled-components';

export const AppBarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    padding: 10px 0;
    border-bottom: solid 1px gray;
    white-space: nowrap;
    overflow-x: auto;
`;

export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    // 마지막 빼고
    & > *:not(:last-of-type) {
        padding-right: 2.5rem;
        border-right: 1px solid #bfbfbf;
    }

    & > *:not(:first-child) {
        padding-left: 2.5rem;
    }
`;

export const SNS = styled.div`
    display: flex;
    justify-content: flex-end;
`;
