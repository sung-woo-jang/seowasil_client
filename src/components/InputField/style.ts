import styled from 'styled-components';

export const InputFieldWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;
export const InputBox = styled.div`
    position: relative;
    border-bottom: 2px solid #2691d9;
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
`;
