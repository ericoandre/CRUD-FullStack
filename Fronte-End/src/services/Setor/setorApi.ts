import { AxiosPromise } from 'axios';
import { SetorDto } from '../../interface/setorDto';
import Api from '../Api';

export async function getSetor():AxiosPromise<SetorDto[]> {
    const response = await Api.get('/setor');
    return response;
}

export async function getSetorId(id:number) {
    console.log(`/setor/${id}`)
    const response = await Api.get(`/setor/${id}`);
    return response;
}

export async function addSetor(data: SetorDto): AxiosPromise<any> {
    const response = await Api.post('/setor', data);
    return response;
}

export async function editSetor(data: SetorDto): AxiosPromise<any> {
    const response = await Api.patch(`/setor/${data.id}`, data);
    return response;
}
export async function removeSetor(data: SetorDto): AxiosPromise<SetorDto> {
    const response = await Api.delete(`/setor/${data.id}`);
    return response;
}