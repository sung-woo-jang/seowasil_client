import styled from 'styled-components';

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

export const ProductPrice = styled.div`
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;

    & span {
        font-weight: 400;
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
