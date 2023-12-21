import { useEffect, useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { setorData } from '../../services/Setor/setorService';
import { ColaboradorDto } from "../../interface/colaboradorDto";
import { colaboradorMutate } from '../../services/Colaborador/colaboradorService';

import Input from "../Inpute/inpute";

interface ModalProps {
    titleModal: string,
    closeModal(): void
}

export function CreateColaborador({ closeModal, titleModal }: ModalProps){
    const { data }  = setorData();

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [setor, setSetor] = useState({});

    const { mutate, isSuccess, isLoading } = colaboradorMutate();

    const submit = () =>{
        const colaboradorData: ColaboradorDto = {
            nome,
            cpf,
            setor
        }
        mutate(colaboradorData);
     }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])
        return(
            <Modal show={closeModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <form className="input-container">
                        <Input label="Nome:" value={nome} updateValue={setNome}/>
                        <Input label="Cpf:" value={cpf} updateValue={setCpf}/>
                        <Form.Select aria-label="Select Setor" 
                        defaultValue="" 
                        onChange={e => setSetor({"id":e.target.value})}
                        >
                            <option>Open this select menu</option>
                            {data?.map( (setor, index) => 
                                <option key={index} value={setor.id} >{setor.nome}</option>
                            )}
                        </Form.Select>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={submit}   type="submit" variant="primary">
                        {isLoading ? 'postando...' : 'Save'}
                    </Button>
                  </Modal.Footer>
              </Modal>
            )

};