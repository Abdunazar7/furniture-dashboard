import React from "react";
import { Pen, Trash } from "../../components/icons";
import productImg from "../../assets/product.png";
import {
  ManageProductWrapper,
  ProductGrid,
  ProductCard,
  ActionButtons,
} from "./ManageProducts";

const MOCK_PRODUCTS = Array(8).fill({
  id: 1,
  title: "Встраиваемый светильник Novotech",
  oldPrice: "7 000₽",
  currentPrice: "6 399₽",
});

function ManageProduct() {
  return (
    <ManageProductWrapper>
      <ProductGrid>
        {MOCK_PRODUCTS.map((item, index) => (
          <ProductCard key={index}>
            <img src={productImg} alt={item.title} />

            <div className="info">
              <h4>{item.title}</h4>
              <div className="old-price">{item.oldPrice}</div>
              <div className="current-price">{item.currentPrice}</div>
            </div>

            <ActionButtons>
              <div className="btn edit-btn" title="Tahrirlash">
                <Pen width={18} height={18} className="pen-icon" />
              </div>
              <div className="btn delete-btn" title="O'chirish">
                <Trash size={18} />
              </div>
            </ActionButtons>
          </ProductCard>
        ))}
      </ProductGrid>
    </ManageProductWrapper>
  );
}

export default ManageProduct;
