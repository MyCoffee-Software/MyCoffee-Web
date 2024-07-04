import React, { useEffect, useState } from 'react'
import * as C from './styles';
import Table from '../../../../components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import MediaQuery from 'react-responsive';

const EmployeesDashboard = () => {
  const [employees, setEmployees] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/employee?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        }
      });

      if (!response.ok) {
        throw Error("Falha ao deletar Empregado");
      }
      const updatedEmployees = employees.filter(employee => employee.id !== id);
      setEmployees(updatedEmployees);
      toast.success("Empregado deletado com sucesso!", {
        theme: "colored",
      });
    } catch (e) {
      toast.error("Erro ao deletar empregado!");
      console.log(e.message);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: employees => employees.id,
      sortable: true,
      width: "80px",
      grow: 1
    },
    {
      name: "Nome",
      selector: employees => employees.nome,
      sortable: true,
      grow: 2
    },
    {
      name: "Cargo",
      selector: employees => employees.cargo,
      sortable: true,
      grow: 1
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          <C.ActionLink to={`/dashboard/employee_edit/${row.id}`}>
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
      selector: employees => employees.id,
      sortable: true,
      width: "50px",
      grow: 1
    },
    {
      name: "Nome",
      selector: employees => employees.nome,
      sortable: true,
      grow: 1
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          <C.ActionLink to={`/dashboard/employee_edit/${row.id}`}>
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
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/empregados?limite=100&pagina=1`);
        const data = await response.json();
        setEmployees(data);
      } catch (e) {
        console.error("Error")
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <C.TableContainer>
        <MediaQuery minWidth={900}>
          <C.ActionLink to={'/dashboard/employee_edit/'}>
            <C.Button>
              <FontAwesomeIcon icon={faPlus} />
            </C.Button>
          </C.ActionLink>

          <Table title="Empregados"
            cols={columns}
            data={employees} />
        </MediaQuery>
        <MediaQuery maxWidth={899}>
          <C.ActionLink to={'/dashboard/employee_edit/'}>
            <C.Button>
              <FontAwesomeIcon icon={faPlus} />
            </C.Button>
          </C.ActionLink>
          <Table title="Empregados"
            cols={mobileColumns}
            data={employees} />
        </MediaQuery>
      </C.TableContainer>
      <ToastContainer />
    </>
  )
}

export default EmployeesDashboard;