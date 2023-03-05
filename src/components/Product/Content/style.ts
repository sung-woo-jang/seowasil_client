import styled from 'styled-components';

export const LastPrice = styled.p`
    color: gray;
    text-decoration: line-through;
    font-weight: bold;
`;

export const NewPrice = styled.p`
    color: #f64749;
    font-weight: bold;
    font-size: 24px;
`;

export const ProductPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;

    & span {
        font-weight: 400;
        color: #6b90dc;
    }
`;

export const ProductContent = styled.div`
    padding: 2rem 1rem;
    @media screen and (min-width: 992px) {
        padding-top: 0;
    }
`;

export const ProductTitle = styled.h3`
    text-transform: capitalize;
    position: relative;
    font-weight: 700;
    color: #12263a;
    margin: 1rem 0;
    font-size: 2rem;
    border-bottom: 1px solid #000;

    width: max-content;
`;

export const ProductDetail = styled.div`
    & > span {
        display: flex;
        font-weight: 800;
        & h2 {
            font-weight: normal;
        }
    }

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
            font-weight: 800;

            & span {
                font-weight: 400;
            }
        }
    }
`;
