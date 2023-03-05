import styled, { css } from 'styled-components';
import Colors from '../../styles/Colors';

interface isActiveProps {
    isActive: boolean;
}

export const OrdererInfoWrapper = styled.section`
    background: ${Colors.White};
`;

export const ExtendBox = styled.div`
    position: relative;
    margin: 10px 20px;
`;

export const Label = styled.div`
    position: relative;
    padding: 10px;
    background: ${Colors.White};
    color: ${Colors.Gray1};
    cursor: pointer;
`;

export const Content = styled.div`
    position: relative;
    background: #fff;
    height: 0;
    overflow: hidden;
    transition: 0.5s;
    overflow-y: auto;
    ${({ isActive }: isActiveProps) =>
        isActive &&
        css`
            height: max-content;
            padding: 10px;
        `}
`;
