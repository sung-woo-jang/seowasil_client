import styled, { css } from 'styled-components';

type ButtonProps = {
    contained?: boolean;
};

export const Button = styled.button`
    background: white;
    color: black;
    border: 1px solid #e2e2e2;
    width: 55px;
    height: 35px;
    margin: 5px;
    border-radius: 5px;
    text-align: center;

    ${({ contained }: ButtonProps) =>
        contained &&
        css`
            background: #287bff;
            color: white;
        `}
`;
