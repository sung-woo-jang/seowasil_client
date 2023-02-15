import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: 100%;
    /* max-height: 50vh; */
    background: white;
    box-shadow: 0 1.25em 3.43em rgba(0, 0, 0, 0.08);
    border-radius: 0.5em;
`;

export const InputBox = styled.div`
    padding: 20px;
    width: 100%;
    /* position: relative; */
    & input {
        /* position: relative; */
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
    /* border: 1px #e2e2e2 solid; */
    padding: 20px;
    & div {
        font-size: 28px;
    }
`;
