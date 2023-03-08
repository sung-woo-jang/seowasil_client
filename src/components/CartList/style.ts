import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const CartsList = styled.li`
    background: ${Colors.White};
`;

export const CheckBoxInput = styled.input`
    border: solid 10px ${Colors.Gray3};
    &:checked {
        background: black;

        & svg path {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            stroke: #fff;
            stroke-width: 3;
            animation: check 4s forwards;
        }

        &::before {
            animation: ripple 0.3s;
        }
    }
`;
