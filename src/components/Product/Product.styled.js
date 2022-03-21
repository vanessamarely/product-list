import styled from "styled-components";

export const Card = styled.div`
  border: 0.08rem solid #f2f2f2;
  padding: 1rem;
`;

export const ImgContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .text-item {
    flex: 0 1 50%;
  }
`;
