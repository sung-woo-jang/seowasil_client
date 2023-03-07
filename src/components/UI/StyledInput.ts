import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    padding: 8px 15px 9px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 21px;
    transition: border-color 0.1s, background-color 0.1s;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgb(53 197 240 /30%);
    }
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 8px 15px 9px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 21px;
    transition: border-color 0.1s, background-color 0.1s;
    resize: none;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgb(53 197 240 /30%);
    }
`;
