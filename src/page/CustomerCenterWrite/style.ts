import styled from 'styled-components';

export const Section = styled.section`
    margin: 3rem auto;
    width: 95%;
    max-width: 25rem;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;

    & h1 {
        text-align: center;
        color: black;
    }
`;

export const Control = styled.div`
    margin-bottom: 0.5rem;

    & label {
        display: block;
        color: black;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    & input {
        font: inherit;
        border-radius: 4px;
        border: 1px solid black;
        width: 100%;
        text-align: left;
        padding: 0.25rem;
    }
`;

export const Actions = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & button {
        cursor: pointer;
        font: inherit;
        color: black;
        border-radius: 4px;
        padding: 0.5rem 2.5rem;
    }

    & button:hover {
    }
`;
