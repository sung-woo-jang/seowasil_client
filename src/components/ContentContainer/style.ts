import styled, { css } from 'styled-components';

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

type TextAreaPrpos = {
    isActive: boolean;
};

export const TextArea = styled.textarea`
    width: 100%;
    height: 20vh;
    padding: 15px;
    font-size: 15px;
    border-radius: 5px;
    outline: none;
    resize: none;
    border-color: #e2e2e2;
    margin-top: 20px;
    ${({ isActive }: TextAreaPrpos) =>
        isActive &&
        css`
            border-color: black;
        `}
`;
type ListItemButtonPrpos = {
    left?: number;
};
export const ListItemButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    padding-left: 15px;

    ${({ left }: ListItemButtonPrpos) =>
        left &&
        css`
            padding-left: ${15 + left}px;
        `}
    cursor: pointer;
    &:hover {
        background: #f5f5f5;
    }
`;
