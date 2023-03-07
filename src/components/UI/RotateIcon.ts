import styled, { css } from 'styled-components';

interface IsActive {
    isActive: boolean;
}

export const RotateIcon = styled.div`
    transition: transform 0.4s;
    ${({ isActive }: IsActive) =>
        isActive &&
        css`
            transform: rotate(180deg);
        `}
`;
