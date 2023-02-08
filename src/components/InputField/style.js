import styled from 'styled-components';

export const InputFieldWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    flex-direction: column;
    gap: 30px;
    /* background: #1d2b3a; */
`;
export const InputBox = styled.div`
    position: relative;
    width: 250px;
    padding-top: 15px;

    & input {
        width: 100%;
        padding: 10px;
        border: 1px solid black;
        /* background: #1d2b3a; */
        border-radius: 5px;
        /* outline: none; */
        color: black;
        font-size: 1em;
        transition: 0.5s;
    }

    & span {
        position: absolute;
        left: 0;
        padding: 10px;
        pointer-events: none;
        font-size: 1em;
        color: #767676;
        text-transform: uppercase;
        transition: 0.5s;
    }

    & input:focus {
        border: 1px solid #287bff;
    }

    & input:focus ~ span {
        color: black;
        transform: translateX(10px) translateY(-7px);
        font-size: 0.8em;
        padding: 0 10px;
        background: white;
        border-left: 1px solid #287bff;
        border-right: 1px solid #287bff;
        letter-spacing: 0.2em;
    }
`;
// export const InputBox = styled.div``;
