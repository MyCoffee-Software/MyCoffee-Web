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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        }
      });

      if (!response.ok) {
        throw Error("Falha ao deletar produto");
      }
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      toast.success("Produto deletado com sucesso!", {
        theme: "colored",
      });
    } catch (e) {
      toast.error("Erro ao deletar produto!");
      console.log(e.message);
    }
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
      name: "Marca",
      selector: products => products.marca,
      sortable: true,
      grow: 1
    },
    {
      name: "Preço",
      selector: products => products.preco,
      sortable: true,
      grow: 1
    },
    {
      name: "Desconto",
      selector: products => products.desconto_porcentual,
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

          <C.Button onClick={() => handleDelete(row.id)}>
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

          <C.Button onClick={() => handleDelete(row.id)}>
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos?limite=100&pagina=1`);
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