import styled from 'styled-components';

type ButtonProps = {
    bgColor?: string;
    color?: string;
};

export const Button = styled.button`
    background: ${({ bgColor }: ButtonProps) => bgColor || 'white'};
    color: ${({ color }: ButtonProps) => color || 'black'};
    border: 1px solid #e2e2e2;
    min-width: 80px;
    padding: 0 5px;
    height: 30px;
    margin: 5px;
    border-radius: 5px;
    text-align: center;
`;
