import { css } from '@emotion/react';
import styled from 'styled-components';

export const ImageBoxWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 40px;
    overflow: hidden;
    ${({ isRound }) =>
        isRound &&
        css`
            border-radius: 50%;
        `}
    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 100%;
        object-fit: cover;
    }
`;
