import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
    border-bottom: 2px solid black;
    border-top: 1px solid black;
    line-height: 3rem;
`;

export const NavItem = styled.div`
    display: flex;
    color: inherit;
    white-space: nowrap;
    flex-shrink: 0;
    text-decoration: none;
    padding: 0 10px;
`;
