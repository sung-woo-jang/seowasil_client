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
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
    & input {
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
    }

    & label {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: 0.5s;
    }

    & span::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #2691d9;
        transition: 0.5s;
    }

    & input:focus ~ label,
    & input:valid ~ label {
        top: -5px;
        color: #2691d9;
    }
    & input:focus ~ span::before,
    & input:valid ~ span::before {
        width: 100%;
    }
    /* position: relative;
    width: 250px;
    padding-top: 15px;

    & input {
        width: 100%;
        padding: 10px;
        border: 1px solid black;        
        border-radius: 5px;        
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
    } */
`;
// export const InputBox = styled.div``;
