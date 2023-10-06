import styled from 'styled-components';
import Image from 'next/image';

export const Card = styled.div`
  padding: 10px;
  box-shadow: 0 0 5px #ffdfdf;
  border-radius: 5px;
  overflow: hidden;
`;

export const Top = styled.div`
  text-align: center;
  & p {
    font-weight: bold;
    color: #0086fe;
  }
`;

export const Button = styled.button`
  outline: 0;
  border: 0;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  padding: 8px 13px;
  width: 100%;
  background: #0086fe;
`;

export const DragArea = styled.div`
  height: 150px;
  border-radius: 5px;
  border: 2px dashed #0086fe;
  color: #0086fe;
  background: #f4f3f9;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  margin-top: 10px;
`;

export const Select = styled.span`
  color: #5256ad;
  margin-left: 5px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.6;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  width: 75px;
  margin-right: 5px;
  height: 75px;
  position: relative;
  margin-bottom: 8px;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const DeleteButton = styled.span`
  position: absolute;
  top: -2px;
  right: 9px;
  font-size: 20px;
  cursor: pointer;
  z-index: 999;
  color: #0086fe;
`;

export const Input = styled.input`
  display: none;
`;
