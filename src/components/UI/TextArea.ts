import styled, { css } from 'styled-components';

type TextAreaProps = {
    isActive?: boolean;
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
    ${({ isActive }: TextAreaProps) =>
        isActive &&
        css`
            border-color: black;
        `}
`;