import React, { useEffect, useState } from 'react'
import * as C from './styles';
import Table from '../../../../components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import MediaQuery from 'react-responsive';

const ProductsDashboard = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = (row) => {
    toast.success('deletado', {
      theme: "colored",
    });
  };

  const columns = [
    {
      name: "ID",
      selector: products => products.id,
      sortable: true,
      width: "80px",
      grow: 1
    },
    {
      name: "Nome",
      selector: products => products.nome,
      sortable: true,
      grow: 2
    },
    {
      name: "Preço",
      selector: products => products.preco,
      sortable: true,
      grow: 1
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          <C.ActionLink to={`/dashboard/product_edit/${row.id}`}>
            <C.Button>
              <FontAwesomeIcon icon={faEdit} />
            </C.Button>
          </C.ActionLink>

          <C.Button onClick={() => handleDelete(row)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </C.Button>
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
      selector: products => products.nome,
      sortable: true,
      grow: 1
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          <C.ActionLink to={`/dashboard/product_edit/${row.id}`}>
            <C.Button>
              <FontAwesomeIcon icon={faEdit} />
            </C.Button>
          </C.ActionLink>

          <C.Button onClick={() => handleDelete(row)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </C.Button>
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos?limite=20&pagina=1`);
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error("Error")
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <C.TableContainer>
        <MediaQuery minWidth={900}>
          <C.ActionLink to={'/dashboard/product_edit/'}>
            <C.Button>
              <FontAwesomeIcon icon={faPlus} />
            </C.Button>
          </C.ActionLink>

          <Table title="Produtos"
            cols={columns}
            data={products} />
        </MediaQuery>
        <MediaQuery maxWidth={899}>
          <C.ActionLink to={'/dashboard/product_edit/'}>
            <C.Button>
              <FontAwesomeIcon icon={faPlus} />
            </C.Button>
          </C.ActionLink>
          <Table title="Produtos"
            cols={mobileColumns}
            data={products} />
        </MediaQuery>
      </C.TableContainer>
      <ToastContainer />
    </>
  )
}

export default ProductsDashboard;