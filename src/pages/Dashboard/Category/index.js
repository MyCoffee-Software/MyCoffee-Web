import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Table from '../../../../components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSave, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MediaQuery from 'react-responsive';

const CategoryDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(false);

  const handleEditNew = () => {
    setEdit(!edit);
  }

  const handleNew = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/categorias`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar nova categoria');
      }

      const newCategory = await response.json();
      setCategories([...categories, newCategory]);

      setInputValue("");
      handleEditNew();
      toast.success('Categoria adicionada com sucesso!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error('Erro ao salvar nova categoria');
      console.error("Error:", e);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/categorias?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir categoria');
      }
      const updatedCategories = categories.filter(category => category.id !== id);
      setCategories(updatedCategories);
      toast.success('Categoria deletada com sucesso!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error('Erro ao excluir a categoria');
      console.error("Error:", e);
    }
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditingName(name);
  };

  const handleSave = async (id) => {
    try {
      const name = editingName;

      const response = await fetch(`${process.env.REACT_APP_API_URL}/categorias?id=${id}`, {
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
      width: "80px",
      grow: 1
    },
    {
      name: "Nome",
      selector: category => category.nome,
      sortable: true,
      grow: 1,
      cell: row => (
        editingId === row.id ? (
          <C.Input
            inputWidth="90%"
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
            <C.Button onClick={() => handleSave(row.id)} >
              <FontAwesomeIcon icon={faSave} />
            </C.Button>
          ) : (
            <C.Button onClick={() => handleEdit(row.id, row.nome)} >
              <FontAwesomeIcon icon={faEdit} />
            </C.Button>
          )}
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
          <C.Button onClick={() => handleEditNew()}>
            {edit ? (
              <FontAwesomeIcon icon={faArrowLeft} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </C.Button>

          {edit ? (
            <C.InputContainer>
              <C.Input type="text" value={inputValue} placeholder="Nova Categoria" onChange={(e) => setInputValue(e.target.value)} />
              <C.Button onClick={() => handleNew()}>
                Salvar
                <C.SaveIcon icon={faSave} />
              </C.Button>
            </C.InputContainer>
          ) : (
            <Table title="Categorias"
              cols={columns}
              data={categories} />
          )}

        </MediaQuery>
        <MediaQuery maxWidth={899}>
          <C.Button onClick={() => handleEditNew()}>
            {edit ? (
              <FontAwesomeIcon icon={faArrowLeft} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </C.Button>

          {edit ? (
            <C.InputContainer>
              <C.Input type="text" value={inputValue} placeholder="Nova Categoria" onChange={(e) => setInputValue(e.target.value)} />
              <C.Button onClick={() => handleNew()}>
                Salvar
                <C.SaveIcon icon={faSave} />
              </C.Button>
            </C.InputContainer>
          ) : (
            <Table title="Categorias"
              cols={columns}
              data={categories} />
          )}
        </MediaQuery>
      </C.TableContainer>
      <ToastContainer />
    </>
  );
};

export default CategoryDashboard;
