import styled, { css } from 'styled-components';

interface TextAreaProps {
    isActive?: boolean;
}

export const TextArea = styled.textarea`
    width: 100%;
    padding: 15px;
    font-size: 15px;
    border-radius: 5px;
    outline: none;
    resize: none;
    border-color: #e2e2e2;
    ${({ isActive }: TextAreaProps) =>
        isActive &&
        css`
            border-color: black;
        `}
`;
