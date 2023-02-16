import styled, { css } from 'styled-components';

type isActiveProps = {
    isActive: boolean;
};

export const DropDownWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #bedfe8;
    flex-wrap: wrap;
`;

export const DropDown = styled.div`
    width: 15em;
    position: relative;
    margin: 2em;

    & * {
        // 굳이?
        box-sizing: border-box;
    }
`;

export const Select = styled.div`
    background: #353535;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px #353535 solid;
    border-radius: 0.5em;
    padding: 1em;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #323741;
    }

    ${({ isActive }: isActiveProps) =>
        isActive &&
        css`
            border: 2px #26489a solid;
            box-shadow: 0 0 0.8em #26489a;
        `}
`;

export const Caret = styled.div`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
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
    background: #323741;
    border: 1px #363a43 solid;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    color: #9fa5b5;
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
            background: #2a2d35;
        }
    }

    ${({ isActive }: isActiveProps) =>
        isActive &&
        css`
            display: block;
            opacity: 1;
        `}
`;
