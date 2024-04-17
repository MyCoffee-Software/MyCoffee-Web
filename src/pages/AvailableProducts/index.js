import React from 'react';
import ProductCard from "../../components/Cards/ProductCard";
import * as C from "./styles";
import img from "../../assets/iconeCafe.svg";

function AvailableProducts() {
  const data = {
    name: "café grão muito bom mesmo tipo é serio bom dms mano é serio bom dms mano erio bom dms mano erio bom dms manoerio bom dms mano",
    price: 990099.99,
    image: img
  };

  return (
    <C.ProductsWrapper>
      <C.ProductsContent>
        <ProductCard product={data} />
      </C.ProductsContent>
    </C.ProductsWrapper>
  );
};

export default AvailableProducts;