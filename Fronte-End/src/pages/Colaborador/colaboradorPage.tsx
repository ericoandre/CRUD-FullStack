import { useState } from 'react';

import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Card, Table } from "react-bootstrap";

import { colaboradorData, deleteMutation } from "../../services/Colaborador/colaboradorService";
import { CreateColaborador } from '../../components/Modal/CreateColaborador';

const ColaboradorPage  = () => {
    const { data } = colaboradorData();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }

    const { mutate, isSuccess, isLoading } = deleteMutation();

    const handleClickRemove = (colaborador:any) =>{
      mutate(colaborador);
    }
    
    return (
    <>
      <Card style={{ width: '85%', margin: '50px auto' }}>
        <Card.Header style={{ padding: '15px' }}>
            Colaborador
          {isModalOpen && <CreateColaborador titleModal={'Cadastra Colaborador'} closeModal={handleOpenModal}/>}
          <Button size="sm" style={{ position: 'absolute', top: '10px', right: '10px', margin: '0 auto' }} onClick={handleOpenModal}>Cadastra colaborador</Button>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Nome Setor</th>
                <th>Descrição Setor</th>
                <th>*</th>
              </tr>
            </thead>
            <tbody>
            {data?.map( (colaborador, index) => 
              <tr key={index}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nome}</td>
                <td>{colaborador.cpf}</td>
                <td>{colaborador.setor.nome}</td>
                <td>{colaborador.setor.descricao}</td>
                <td>
                    <button onClick={() => {handleClickRemove(colaborador)}} style={{ margin: '3px' }} color="warning" className="btn btn-warning mr-1" >
                        <FaRegTrashAlt />
                    </button>
                </td>
              </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
    );
};

export default ColaboradorPage;