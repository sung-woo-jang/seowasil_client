import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const OrderWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    background: ${Colors.Gray6};
    & > section {
        padding: 5px 20px;
        background: ${Colors.White};
    }

    & > *:last-child {
        grid-gap: 0;
    }
`;
