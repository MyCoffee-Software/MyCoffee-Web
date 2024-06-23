import React, { useEffect, useState } from 'react';
import * as C from './styles';
import CartTable from '../../components/CartTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerPlan, setCustomerPlan] = useState('basic'); // Exemplo de plano de cliente

  const handleDelete = (row) => {
    setCartItems(cartItems.filter(item => item.product.id !== row.product.id));
  };

  const handleQuantityChange = (productId, quantity) => {
    setCartItems(cartItems.map(item => 
      item.product.id === productId ? { ...item, quantity: quantity } : item
    ));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const calculateDiscount = (subtotal) => {
    const planDiscounts = {
      basic: 0,
      silver: 0.05,
      gold: 0.10,
      platinum: 0.15
    };
    return (subtotal * (planDiscounts[customerPlan] || 0)).toFixed(2);
  };

  const calculateTotal = (subtotal, discount) => {
    return (subtotal - discount).toFixed(2);
  };

  const columns = [
    {
      name: "",
      selector: cartItems => <C.Image src={cartItems.product.image} alt={cartItems.product.title} />,
      sortable: false,
      width: "10%"
    },
    {
      name: "Nome",
      selector: cartItems => cartItems.product.title,
      sortable: true
    },
    {
      name: "Quantidade",
      cell: (row) => (
      <input 
          type="number" 
          value={row.quantity} 
          min="1" 
          onChange={(e) => handleQuantityChange(row.product.id, parseInt(e.target.value))}
          style={{border: 'none', fontSize: '20px', textAlign: 'center', width:'5ch'}}
        />
      ),
      sortable: true
    },
    {
      name: "SubTotal",
      selector: cartItems => (cartItems.product.price * cartItems.quantity).toFixed(2),
      sortable: true
    },
    {
      name: "",
      cell: (row) => (
        <div>
          <C.ActionButton onClick={() => handleDelete(row)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </C.ActionButton>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/carts/1"); // Altere a URL para a correta
        const data = await response.json();
        const cartItemsWithProductDetails = await Promise.all(
          data.products.map(async (item) => {
            const productResponse = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
            const productData = await productResponse.json();
            return { ...item, product: productData };
          })
        );
        setCartItems(cartItemsWithProductDetails);
      } catch (e) {
        console.error("Erro ao buscar itens do carrinho");
      }
    };

    fetchCartItems();
  }, []);

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const total = calculateTotal(subtotal, discount);

  return (
    <C.Container>
      <C.TableContainer>
        <CartTable title="Carrinho" cols={columns} data={cartItems} />
      </C.TableContainer>
      <C.SummaryContainer>
        <C.SummaryTitle>Resumo do Carrinho</C.SummaryTitle>
        <C.SummaryItem>
          <span>Subtotal:</span>
          <span>{subtotal}</span>
        </C.SummaryItem>
        <C.SummaryItem>
          <span>Desconto:</span>
          <span>{discount}</span>
        </C.SummaryItem>
        <C.SummaryItem>
          <span>Total:</span>
          <span>{total}</span>
        </C.SummaryItem>
        <C.CheckoutButton>Finalizar Compra</C.CheckoutButton>
      </C.SummaryContainer>
    </C.Container>
  );
};
export default Cart;