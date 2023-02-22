import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    .centered {
        margin: 3rem auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #84868b;
        border-color: #84868b transparent #84868b transparent;
        animation: ${spinner} 1.2s linear infinite;
    }
`;

export const LodingSpinnerWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(132, 134, 139, 0.3);
    position: fixed;
    z-index: 10;
`;
