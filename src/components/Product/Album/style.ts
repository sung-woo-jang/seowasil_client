import styled from 'styled-components';

export const ProductImages = styled.div`
    @media screen and (min-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const ImageShowcase = styled.div`
    display: flex;
    width: 100%;
    transition: all 0.5s ease;

    & img {
        min-width: 100%;
    }
`;

export const ImageSelect = styled.div`
    display: flex;
`;

export const ImageItem = styled.div`
    margin: 0.3rem;
    &:nth-child(n):not(:last-child) {
        margin-right: 0;
    }
    &:hover {
        opacity: 0.7;
    }
`;
