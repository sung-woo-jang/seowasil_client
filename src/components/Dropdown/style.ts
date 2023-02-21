import styled, { css } from 'styled-components';

type isActiveProps = {
    isActive: boolean;
};

export const DropDown = styled.div`
    width: max-content;
    position: relative;
    margin: 2em;
`;

export const Select = styled.div`
    background: #fff;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px #353535 solid;
    border-radius: 0.5em;
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s;

    ${({ isActive }: isActiveProps) =>
        isActive &&
        css`
            border: 2px #26489a solid;
            box-shadow: 0 0 0.8em #26489a;
        `}
`;

export const Caret = styled.div`
    transition: 0.3s;

    ${({ isActive }: isActiveProps) =>
        isActive &&
        css`
            transform: rotate(180deg);
        `}
`;

export const Menu = styled.ul`
    list-style: none;
    padding: 0.2em 0.5em;
    background: #fff;
    border: 1px #000 solid;
    border-radius: 0.5em;
    color: black;
    position: relative;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    transition: 0.5s;
    z-index: 1;

    & li {
        padding: 0.7em 0.5em;
        margin: 0.3em 0;
        border-radius: 0.5em;
        cursor: pointer;

        &:hover {
            background: #dfdfdf;
        }
    }

    ${({ isActive }: isActiveProps) =>
        isActive &&
        css`
            display: block;
            opacity: 1;
        `}
`;
