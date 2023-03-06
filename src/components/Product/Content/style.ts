import styled from 'styled-components';
import Colors from '../../../styles/Colors';

export const ProductContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(max-content, min-content);
    row-gap: 15px;
`;

export const ProductTitle = styled.h3`
    text-transform: capitalize;
    position: relative;
    font-weight: 400;
    color: #12263a;
    margin: 1rem 0;
    font-size: 2rem;

    width: max-content;
`;

export const ProductPrice = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;

    & span {
        font-weight: 400;
        color: ${Colors.Black};
    }
`;

export const PrevPrice = styled.p`
    color: ${Colors.Gray3};
    text-decoration: line-through;
    font-weight: bold;
`;

export const SellPrice = styled.div`
    color: ${Colors.Black};
    font-weight: 900;
    font-size: 24px;
    line-height: 1.3;
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
