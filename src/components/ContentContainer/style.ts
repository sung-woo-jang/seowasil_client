import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: 100%;
    background: white;
    box-shadow: 0 1.25em 3.43em rgba(0, 0, 0, 0.08);
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Left = styled.div`
    grid-column: 1 / 2;
    border-right: 1px solid #dfdfdf;
`;
export const Rigth = styled.div`
    grid-column: 2 / -1;
`;

export const InputBox = styled.div`
    padding: 20px;
    width: 100%;
    & input {
        width: 100%;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 15px;
        border-bottom: 1px solid #000;
    }
`;

export const TextAreaBox = styled.div`
    width: 100%;
    padding: 20px;
    & div {
        font-size: 28px;
    }
`;
