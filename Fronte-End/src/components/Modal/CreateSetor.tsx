import { useEffect, useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { setorMutate } from '../../services/Setor/setorService';
import { SetorDto } from '../../interface/setorDto';
import Input from "../Inpute/inpute";

interface ModalProps {
    titleModal: string,
    closeModal(): void
}

export function CreateSetor({ closeModal, titleModal }: ModalProps){
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    const { mutate, isSuccess, isLoading } = setorMutate();

    const submit = () =>{
        const setorData: SetorDto = {
            nome,
            descricao
        }
        mutate(setorData)
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
                <Input label="Descrição:" value={descricao} updateValue={setDescricao}/>
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