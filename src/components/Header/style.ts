import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    height: 150px;
`;

export const Logo = styled(Link)`
    font-family: 'Do Hyeon';
    font-size: 3rem;
    color: black;
    /* font-weight: 700; */
`;
