import React, { useEffect, useState } from 'react'
import * as C from './styles';
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductsDashboard = () => {
  const [products, setProducts] = useState([]);
  
  const handleDelete = (row) => {
    alert(`Excluir: ${row.title}`);
  }

  const columns = [
    {
      name: "ID",
      selector: products => products.id,
      sortable: true,
      width: "150px"
    },
    {
      name: "Nome",
      selector: products => products.title,
      sortable: true
    },
    {
      name: "Preço",
      selector: products => products.price,
      sortable: true
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          <C.ActionLink to={`/dashboard/product_edit/${row.id}`}>
            <FontAwesomeIcon icon={faEdit}/>
          </C.ActionLink>

          <button onClick={() => handleDelete(row)}>
            <FontAwesomeIcon icon={faTrashAlt}/>
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

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
    <C.TableContainer>
      <Table  title="Produtos" 
              cols={columns} 
              data={products}/>
    </C.TableContainer>
  )
}

export default ProductsDashboard;