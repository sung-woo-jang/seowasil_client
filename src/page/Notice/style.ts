import styled, { css } from 'styled-components';

const color = {
    blue: '#287bff',
    white: '#fff',
    grey: '#f5f5f5',
    black1: '#222',
    black2: '#999',
};

interface isActiceProps {
    isActive: boolean;
}

// order details list
export const Details = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
`;
export const RecentOrders = styled.div`
    position: relative;
    display: grid;
    background: ${color.white};
    padding: 20px;
    @media screen and (max-width: 768px) {
        overflow-x: auto;
    }
`;
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const CardTitle = styled.h2`
    color: ${color.black1};
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

export const QuestionTable = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border-top: 2px solid #222;
    border-bottom: 1px solid #222;
    margin-top: 10px;
`;

export const Accordion = styled.div`
    width: 100%;
`;

export const ContentBox = styled.div`
    position: relative;
    margin: 10px 20px;
`;

export const Label = styled.div`
    position: relative;
    padding: 10px;
    background: #2694af;
    color: #fff;
    cursor: pointer;

    &::before {
        content: '+';
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 1.5em;

        ${({ isActive }: isActiceProps) =>
            isActive &&
            css`
                content: '-';
            `}
    }
`;

export const Content = styled.div`
    position: relative;
    background: #fff;
    height: 0;
    overflow: hidden;
    transition: 0.5s;
    overflow-y: auto;
    background: #f5f5f5;
    ${({ isActive }: isActiceProps) =>
        isActive &&
        css`
            height: max-content;
            padding: 10px;
        `}
`;
