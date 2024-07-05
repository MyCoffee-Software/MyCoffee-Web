import React, { useEffect, useState } from 'react'
import * as C from './styles';
import Table from '../../../../components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import MediaQuery from 'react-responsive';

const PlansDashboard = () => {
  const [plans, setPlans] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/planos?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir categoria');
      }
      const updatedPlans = plans.filter(plan => plan.id !== id);
      setPlans(updatedPlans);
      toast.success('Plano deletada com sucesso!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error('Erro ao excluir plano!');
      console.error("Error:", e);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: plans => plans.id,
      sortable: true,
      width: "80px",
      grow: 1
    },
    {
      name: "Nome",
      selector: plans => plans.nome,
      sortable: true,
      grow: 2
    },
    {
      name: "Preço Mensal",
      selector: plans => plans.precoMensal,
      sortable: true,
      grow: 1,
    },
    {
      name: "Preço Anual",
      selector: plans => plans.precoAnual,
      sortable: true,
      grow: 1
    },
    {
      name: "Ativo",
      selector: plans => plans.ativo ? "Sim" : "Não",
      sortable: true,
      grow: 1
    },
    {
      name: "Ações",
      cell: (row) => (
        <div>
          <C.ActionLink to={`/dashboard/plan_edit/${row.id}`}>
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
      selector: plans => plans.id,
      sortable: true,
      width: "80px",
      grow: 1
    },
    {
      name: "Nome",
      selector: plans => plans.nome,
      sortable: true,
      grow: 2
    },
    {
      name: "Preço Mensal",
      selector: plans => plans.precoMensal,
      sortable: true,
      grow: 1
    },
    {
      name: "Preço Anual",
      selector: plans => plans.precoAnual,
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
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/planos?limite=20&pagina=1`);
        const data = await response.json();
        setPlans(data);
      } catch (e) {
        console.error("Error")
      }
    };

    fetchPlans();
  }, []);

  return (
    <>
      <C.TableContainer>
        <MediaQuery minWidth={900}>
          <C.ActionLink to={'/dashboard/plan_edit/'}>
            <C.Button>
              <FontAwesomeIcon icon={faPlus} />
            </C.Button>
          </C.ActionLink>

          <Table title="Planos"
            cols={columns}
            data={plans} />
        </MediaQuery>
        <MediaQuery maxWidth={899}>
          <C.ActionLink to={'/dashboard/plan_edit/'}>
            <C.Button>
              <FontAwesomeIcon icon={faPlus} />
            </C.Button>
          </C.ActionLink>
          <Table title="Planos"
            cols={mobileColumns}
            data={plans} />
        </MediaQuery>
      </C.TableContainer>
      <ToastContainer />
    </>
  )
}

export default PlansDashboard;