import React, { useEffect, useState } from 'react';
import ProductCard from "../../components/Cards/ProductCard";
import * as C from "./styles";
import img from "../../assets/iconeCafe.svg";

function AvailableProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error("Error")
      }
    };

    fetchProducts();
  }, []);

  return (
    <C.ProductsWrapper>
      {products.map((product) => (
        <C.ProductsContent>
          <ProductCard key={product.id} product={product} />
        </C.ProductsContent>
      ))}
    </C.ProductsWrapper>
  );
};

export default AvailableProducts;