import { AxiosPromise } from 'axios';
import { SetorDto } from '../../interface/setorDto';
import Api from '../Api';
import { ColaboradorDto } from '../../interface/colaboradorDto';

export async function getColaborador():AxiosPromise<ColaboradorDto[]> {
    const response = await Api.get('/colaborador');
    return response;
}

export async function getColaboradorId(data: ColaboradorDto) {
    const response = await Api.get(`/colaborador/${data.id}`);
    return response;
}

export async function addColaborador(data: ColaboradorDto): AxiosPromise<any> {
    const response = await Api.post('/colaborador', data);
    return response;
}

export async function editColaborador(data: ColaboradorDto): AxiosPromise<any> {
    const response = await Api.patch(`/colaborador/${data.id}`, data);
    return response;
}
export async function removeColaborador(data: ColaboradorDto): AxiosPromise<SetorDto> {
    const response = await Api.delete(`/colaborador/${data.id}`);
    return response;
}