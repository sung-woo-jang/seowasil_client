import styled from 'styled-components';

export const CardWrapper = styled.div`
    line-height: 1.5;
    max-width: 1100px;
    margin: 0 auto;
    & img {
        width: 100%;
        display: block;
    }

    @media screen and (min-width: 992px) {
        height: 100vh;
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

export const ProductImages = styled.div`
    @media screen and (min-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const ImageDisplay = styled.div`
    overflow: hidden;
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

export const ProductContent = styled.div`
    padding: 2rem 1rem;
    @media screen and (min-width: 992px) {
        padding-top: 0;
    }
`;

export const ProductTitle = styled.h2`
    font-size: 3rem;
    text-transform: capitalize;
    position: relative;
    font-weight: 700;
    color: #12263a;
    margin: 1rem 0;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 80px;
        background: #12263a;
    }
`;

export const ProductPrice = styled.div`
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;

    & span {
        font-weight: 400;
    }
`;

export const LastPrice = styled.p`
    & span {
        color: #f64749;
        text-decoration: line-through;
    }
`;

export const NewPrice = styled.p`
    & span {
        color: #256eff;
    }
`;

export const ProductDetail = styled.div`
    & h2 {
        text-transform: capitalize;
        color: #12263a;
        padding-bottom: 0.6rem;
    }

    & p {
        font-size: 0.9rem;
        padding: 0.3rem;
        opacity: 0.8;
    }

    & ul {
        margin: 1rem 0;
        font-size: 0.9rem;

        & li {
            margin: 0;
            list-style: none;
            background: url(https://png.pngitem.com/pimgs/s/508-5084657_green-check-mark-icon-free-check-icon-hd.png)
                left center no-repeat;
            background-size: 18px;
            padding-left: 1.7rem;
            margin: 0.4rem 0;
            font-weight: 600;
            opacity: 0.9;

            & span {
                font-weight: 400;
            }
        }
    }
`;

// 구매 정보
export const PurchaseInfo = styled.div`
    margin: 1.5rem 0;

    & input,
    & button {
        border: 1.5px solid #ddd;
        border-radius: 25px;
        text-align: center;
        padding: 0.45 0.8rem;
        outline: 0;
        margin: 0.2rem;
        margin-bottom: 1rem;
    }

    & input {
        width: 60px;
    }

    & button {
        cursor: pointer;
        color: #fff;
        &:first-of-type {
            background: #256eff;
        }
        &:last-of-type {
            background: #f64749;
        }

        &:hover {
            opacity: 0.9;
        }
    }
`;
