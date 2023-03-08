import styled, { css } from 'styled-components';

interface ItemProps {
    isSingle?: boolean;
}

export const CustomerCenterDetailWrapper = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    /* grid-gap: 10px; */
    padding: 15px;
`;

export const GridItem = styled.div`
    display: grid;
    padding: 15px;
    grid-template-columns: 100px 1fr;
    align-items: center;
    line-height: 25px;
    font-size: 1.1rem;
    font-weight: 400;
    border-bottom: 2px solid gray;
    ${({ isSingle }: ItemProps) =>
        isSingle &&
        css`
            grid-template-columns: 1fr;
        `}
`;
