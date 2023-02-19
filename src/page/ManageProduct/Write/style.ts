import styled from 'styled-components';

export const WriteWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    justify-content: center;
    margin: 0 auto;

    & form > * {
        margin-bottom: 20px;
    }
`;
