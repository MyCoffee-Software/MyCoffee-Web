import React, { useEffect, useState } from 'react';
import * as C from './styles';
import CartTable from '../../components/CartTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const Cart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartPlan, setCartPlan] = useState('basic');
  const [total, setTotal] = useState();
  const [subTotal, setSubTotal] = useState();
  const [discount, setDiscount] = useState();

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/carrinho`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
      });
      const data = await response.json();

      setCartItems(data.produtos);
      setCartPlan(data.plano);
      calculate(data.produtos, data.plano.total, data.total);
    } catch (e) {
      toast.error(e.message);
      console.error("Erro ao buscar itens do carrinho", e);
    }
  };

  const handleDelete = async (row) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/carrinho/produtos/${row.idProduto}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar item do carrinho");
      }

      fetchCartItems();

    } catch (e) {
      toast.error(e.message);
      console.error("Erro ao deletar item do carrinho", e);
    }
  };

  const handleQuantityChange = async (productId, quantity) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/carrinho/produtos`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
        body: JSON.stringify([{ idProduto: productId, quantidade: quantity }]),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar quantidade");
      }

      fetchCartItems();

    } catch (e) {
      toast.error(e.message);
      console.error("Erro ao atualizar quantidade", e);
    }
  };

  const calculate = (items, plan, total) => {
    const calcSubTotal = parseFloat(items.reduce((acc, item) => acc + item.subTotal, 0).toFixed(2));
    const calcDiscount = parseFloat(items.reduce((acc, item) => acc + item.descontos.descontosTotais, 0).toFixed(2));

    setSubTotal(calcSubTotal + plan);
    setDiscount(calcDiscount);
    setTotal(total);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const columns = [
    {
      name: "Nome",
      selector: cartItems => cartItems.nome,
      sortable: true
    },
    {
      name: "Quantidade",
      cell: (row) => (
        <input 
          type="number" 
          value={row.quantidade} 
          min="1" 
          onChange={(e) => handleQuantityChange(row.idProduto, parseInt(e.target.value))}
          style={{border: 'none', fontSize: '20px', textAlign: 'center', width:'5ch'}}
        />
      ),
      sortable: true
    },
    {
      name: "Val. Unitário",
      selector: cartItems => cartItems.preco.toFixed(2),
      sortable: true
    },
    {
      name: "SubTotal",
      selector: cartItems => cartItems.subTotal.toFixed(2),
      sortable: true
    },
    {
      name: "Total",
      selector: cartItems => cartItems.total.toFixed(2),
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

  const columnsPlan = [
    {
      name: "Nome",
      selector: cartPlan => cartPlan.nome,
      sortable: true,
      grow: 5
    },
    {
      name: "Total",
      selector: cartPlan => cartPlan.total,
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

  return (
    <C.Container>
      <ToastContainer/>
      <C.TableContainer>
        <CartTable title="Produtos" cols={columns} data={cartItems} />
        <CartTable title="Plano" cols={columnsPlan} data={[cartPlan]} />
      </C.TableContainer>
      <C.SummaryContainer>
        <C.SummaryTitle>Resumo do Carrinho</C.SummaryTitle>
        <C.SummaryItem>
          <span>Subtotal:</span>
          <span>{subTotal}</span>
        </C.SummaryItem>
        <C.SummaryItem>
          <span>Descontos:</span>
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
