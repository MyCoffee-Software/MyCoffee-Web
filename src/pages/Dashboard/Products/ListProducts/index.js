import React, { useEffect, useState } from 'react'
import * as C from './styles';
import Table from '../../../../components/Table';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

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
      width: "120px",
      grow: 1
    },
    {
      name: "Nome",
      selector: products => products.title,
      sortable: true,
      grow: 2
    },
    {
      name: "Preço",
      selector: products => products.price,
      sortable: true,
      grow: 1
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
      button: true,
      right: true,
      grow: 1
    }
  ];

  const mobileColumns = [
    {
      name: "ID",
      selector: products => products.id,
      sortable: true,
      width: "50px",
      grow: 1
    },
    {
      name: "Nome",
      selector: products => products.title,
      sortable: true,
      width: "100px",
      grow: 2
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
      button: true,
      right: true,
      grow: 1
    }
  ]

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
      <MediaQuery minWidth={900}>
        <Table  title="Produtos" 
                cols={columns} 
                data={products}/>
      </MediaQuery>
      <MediaQuery maxWidth={899}>
        <Table  title="Produtos" 
                cols={mobileColumns} 
                data={products}/>
      </MediaQuery>
    </C.TableContainer>
  )
}

export default ProductsDashboard;