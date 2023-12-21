import { SetorDto } from "./setorDto";

export interface ColaboradorDto {
    id?: number,
    nome: string,
    cpf: string,
    setor: SetorDto
}