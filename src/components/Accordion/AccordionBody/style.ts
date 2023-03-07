import styled, { css } from 'styled-components';

interface isActiveProps {
    isActive: boolean;
}

export const AccordionBodyWrapper = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s;
    ${({ isActive }: isActiveProps) =>
        isActive &&
        css`
            max-height: 200px;
        `}
    & > div {
        padding-bottom: 1rem;
    }
`;
