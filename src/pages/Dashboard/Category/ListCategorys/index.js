import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Table from '../../../../components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MediaQuery from 'react-responsive';

const CategoryDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const handleDelete = (row) => {
    toast.success('deletado', {
      theme: "colored",
    });
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditingName(name);
  };

  const handleSave = async (id) => {
    try {
      const name = editingName;

      const response = await fetch(`${process.env.REACT_APP_API_URL}/categorias/{id}?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: name }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar a categoria');
      }

      const updatedCategories = categories.map(cat =>
        cat.id === id ? { ...cat, nome: editingName } : cat
      );
      setCategories(updatedCategories);
      setEditingId(null);
      toast.success('Categoria atualizada com sucesso!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error('Erro ao atualizar a categoria');
      console.error("Error:", e);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: category => category.id,
      sortable: true,
      width: "120px",
      grow: 1
    },
    {
      name: "Nome",
      selector: category => category.nome,
      sortable: true,
      grow: 2,
      cell: row => (
        editingId === row.id ? (
          <input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
        ) : (
          row.nome
        )
      )
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          {editingId === row.id ? (
            <button onClick={() => handleSave(row.id)}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          ) : (
            <button onClick={() => handleEdit(row.id, row.nome)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}
          <button onClick={() => handleDelete(row)}>
            <FontAwesomeIcon icon={faTrashAlt} />
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
      selector: category => category.id,
      sortable: true,
      width: "50px",
      grow: 1
    },
    {
      name: "Nome",
      selector: category => category.nome,
      sortable: true,
      width: "100px",
      grow: 2,
      cell: row => (
        editingId === row.id ? (
          <input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
        ) : (
          row.nome
        )
      )
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          {editingId === row.id ? (
            <button onClick={() => handleSave(row.id)}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          ) : (
            <button onClick={() => handleEdit(row.id, row.nome)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}
          <button onClick={() => handleDelete(row)}>
            <FontAwesomeIcon icon={faTrashAlt} />
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/categorias?limite=10&pagina=1`);
        const data = await response.json();
        setCategories(data);
      } catch (e) {
        console.error("Error");
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <C.TableContainer>
        <MediaQuery minWidth={900}>
          <Table title="Categorias"
            cols={columns}
            data={categories} />
        </MediaQuery>
        <MediaQuery maxWidth={899}>
          <Table title="Categorias"
            cols={mobileColumns}
            data={categories} />
        </MediaQuery>
      </C.TableContainer>
      <ToastContainer />
    </>
  );
};

export default CategoryDashboard;
