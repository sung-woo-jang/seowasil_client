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

/* 

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
 */
