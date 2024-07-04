import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from "./styles";
import InfoInput from '../../../../components/InfoInput';
import Button from '../../../../components/Button';
import { ActionLink } from '../ListEmployees/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';
import Multiselect from 'multiselect-react-dropdown';

const EditEmployee = () => {
  const { employee_id } = useParams();
  const [employee, setEmployee] = useState();
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [employeeData, setEmployeeData] = useState({
    name: '',
    position: '',
    photo: ''
  });
  const [employeePhoto, setEmployeePhoto] = useState(null);

  useEffect(() => {
    if (employee && employee.photo) {
      const photoName = employee.photo.split('/').pop();
      import(`../../../../assets/${photoName}`)
        .then(photoModule => {
          setEmployeePhoto(photoModule.default);
        })
        .catch(error => {
          console.error(`Failed to load photo: ${photoName}`, error);
        });
    }
  }, [employee]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/employees?id=${employee_id}`);
        const data = await response.json();
        setEmployee(data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchPositions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/positions?limit=20&page=1`);
        const data = await response.json();
        setPositions(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchPositions();
    fetchEmployee();
  }, [employee_id]);

  useEffect(() => {
    if (employee_id && employee) {
      setEmployeeData({
        name: employee.name,
        position: employee.position,
        photo: employee.photo
      });

      const selectedPosition = positions.find(pos => pos.id === employee.position_id);
      setSelectedPosition(selectedPosition);
    }
  }, [employee, employee_id, positions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevEmployeeData) => ({
      ...prevEmployeeData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const requestBody = {
      name: employeeData.name,
      position_id: selectedPosition.id,
      photo: employeeData.photo
    };

    if (employee_id) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/employees?id=${employee_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Erro ao atualizar/criar funcionário!");
        }

        toast.success("Funcionário atualizado com sucesso", {
          theme: "colored",
        });
      } catch (e) {
        toast.error("Erro ao atualizar funcionário!");
        console.error("Error:", e);
      }
    } else {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/employees`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Erro ao atualizar/criar funcionário!");
        }

        toast.success("Funcionário criado com sucesso", {
          theme: "colored",
        });
      } catch (e) {
        toast.error("Erro ao criar funcionário!");
        console.error("Error:", e);
      }
    }
  }

  return (
    <>
      <MediaQuery minWidth={1280}>
        <ActionLink to={"/dashboard/employees_dashboard"}>
          <C.Button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </C.Button>
        </ActionLink>
      </MediaQuery>

      <C.EmployeeContainer>

        <C.Title>Editar Funcionário</C.Title>

        <C.EmployeeInfoWrapper>
          <C.EmployeeInfoColumn>
            <InfoInput title="Nome" name="name" inputInfo={employeeData.name} onChange={handleInputChange} />

            <C.SelectContainer>
              <C.Label>Cargo</C.Label>
              <Multiselect
                options={positions}
                selectedValues={selectedPosition ? [selectedPosition] : []}
                displayValue='name'
                onSelect={(selectedList) => setSelectedPosition(selectedList[0])}
                onRemove={() => setSelectedPosition(null)}
                singleSelect={true}
                placeholder='Selecione o cargo'
                hidePlaceholder={true}
                avoidHighlightFirstOption={true} />
            </C.SelectContainer>
          </C.EmployeeInfoColumn>

          <C.EmployeeInfoColumn>
            <C.EmployeePhotoContainer>
              <C.EmployeePhoto src={employeePhoto} />
            </C.EmployeePhotoContainer>
          </C.EmployeeInfoColumn>
        </C.EmployeeInfoWrapper>
        <C.EmployeeInfoRow>
          <Button Text="Salvar" onClick={() => handleSave()} />
        </C.EmployeeInfoRow>
      </C.EmployeeContainer>
      <ToastContainer />
    </>
  );
};

export default EditEmployee;