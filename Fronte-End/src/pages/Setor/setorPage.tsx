import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt } from "react-icons/fa";

import { CreateSetor } from '../../components/Modal/CreateSetor';
import { setorData, deleteMutation } from '../../services/Setor/setorService';

const SetorPage = () => {
  const { data } = setorData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const { mutate, isSuccess, isLoading } = deleteMutation();
  const handleClickRemove = (setor:any) =>{
    mutate(setor);
  }

  return (
    <>
      <Card style={{ width: '85%', margin: '50px auto' }}>
        <Card.Header style={{ padding: '15px' }}>
          Setor
          {isModalOpen && <CreateSetor titleModal={'Cadastra Novo Setor'} closeModal={handleOpenModal}/>}
          <Button size="sm" style={{ position: 'absolute', top: '10px', right: '10px', margin: '0 auto' }} onClick={handleOpenModal}>Cadastra Setor</Button>

        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>*</th>
              </tr>
            </thead>
            <tbody>
            {data?.map( (setor, index) => 
              <tr key={index}>
                <td>{setor.id}</td>
                <td>{setor.nome}</td>
                <td>{setor.descricao}</td>
                <td>
                  <button onClick={() => { handleClickRemove(setor) }} style={{ margin: '3px' }} color="warning" className="btn btn-warning mr-1" >
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

export default SetorPage;
