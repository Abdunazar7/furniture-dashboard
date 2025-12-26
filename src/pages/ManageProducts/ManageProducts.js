import styled from "styled-components";

export const ManageProductWrapper = styled.div`
  width: 100%;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 16px;
  }

  .info {
    width: 100%;

    h4 {
      font-size: 14px;
      font-weight: 400;
      color: #111;
      margin-bottom: 8px;
      line-height: 1.4;
    }

    .old-price {
      font-size: 12px;
      color: #888;
      text-decoration: line-through;
      margin-bottom: 2px;
    }

    .current-price {
      font-size: 18px;
      font-weight: 700;
      color: #111;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  align-self: flex-end;

  .pen-icon {
    color: black;
  }

  .btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #eee;
    transition: all 0.2s;
  }

  .edit-btn {
    background: #f6f3f3ff;
    color: #000000ff;
    &:hover {
      background: #f5f5f5;
    }
  }

  .delete-btn {
    background: #444;
    color: #fff;
    border: none;
    &:hover {
      background: #222;
    }
  }
`;
