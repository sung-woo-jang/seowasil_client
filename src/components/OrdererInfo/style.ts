import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const OrdererInfoWrapper = styled.section`
    background: ${Colors.White};
`;

export const Label = styled.div`
    position: relative;
    padding: 10px 0;
    background: ${Colors.White};
    color: ${Colors.Gray1};
`;

/* 
export const ExtendBox = styled.div`
position: relative;
margin: 10px 0;
`;

export const Content = styled.div`
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
 */
