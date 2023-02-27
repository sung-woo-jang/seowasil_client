import styled from 'styled-components';

export const CardWrapper = styled.div`
    & img {
        width: 100%;
        display: block;
    }

    @media screen and (min-width: 992px) {
        padding-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Card = styled.div`
    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
`;
