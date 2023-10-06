import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex-flow: row wrap;
  /* @media (min-width: 1024px) {
    width: 50%;
  } */
`;

export const MainImage = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ProductImage = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 0.375rem;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%; /* Adjust as needed */
`;

export const TitleContainer = styled.div`
  span {
    color: #9333ea; /* Replace with your desired color */
    font-weight: 600;
  }

  h1 {
    font-size: 1.875rem; /* Equivalent to text-3xl */
    font-weight: bold;
  }
`;

export const Description = styled.p`
  color: #4b5563; /* Replace with your desired color */
`;

export const Price = styled.h6`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 600;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  button {
    background-color: #e5e7eb; /* Replace with your desired color */
    padding: 0.5rem 1rem;
    border-radius: 0.375rem; /* Equivalent to rounded-lg */
    color: #9333ea; /* Replace with your desired color */
    font-size: 1.5rem; /* Equivalent to text-3xl */
    cursor: pointer;
  }
`;

export const Quantity = styled.span`
  padding: 1rem 1.5rem;
  border-radius: 0.375rem; /* Equivalent to rounded-lg */
`;

export const AddToCartButton = styled.button`
  background-color: #9333ea; /* Replace with your desired color */
  color: white;
  font-weight: 600;
  padding: 1.125rem 4rem; /* Equivalent to py-3 px-16 */
  border-radius: 1rem; /* Equivalent to rounded-xl */
  cursor: pointer;
`;
