import { KeyValue } from "@angular/common";

// constants
export const STEP_LIST: KeyValue<string, string>[] = [
    { key: 'inicio', value: 'Inicio' },
    { key: 'documentos', value: 'Documentos' },
    { key: 'dados-cadastrais', value: 'Dados Cadastrais' },
    { key: 'admissao', value: 'Admissão' }
];

export enum CPF_STATUS {
    REGULAR = 'regular',
    INRREGULAR = 'irregular'
}

export type TUser = { 
    cpf: string, 
    name: string, 
    status: CPF_STATUS 
};