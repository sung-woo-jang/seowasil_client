import styled, { css } from 'styled-components';

export const UploadFormWrapper = styled.div<{ isActive: boolean }>`
    max-height: 60vh;
    overflow: scroll;

    padding: 3.12em 1.87em;
    box-shadow: 0 1.25em 3.43em rgba(0, 0, 0, 0.08);
    border-radius: 0.5em;
    background: white;
    ${({ isActive }) =>
        isActive &&
        css`
            border: 0.2em dashed #025bee;
        `}
`;

export const UploadButton = styled.input`
    display: none;
`;

export const UploadLabel = styled.label`
    display: block;
    position: relative;
    background-color: #025bee;
    color: #fff;
    font-size: 1.1em;
    text-align: center;
    width: 16em;
    padding: 1em 0;
    border-radius: 0.3em;
    margin: 0 auto 1em auto;
    cursor: pointer;
`;

export const Error = styled.div`
    text-align: center;
    color: red;
`;

export const ImageDisplay = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    gap: 1.25em;
    flex-wrap: wrap;
`;
