export type TDashInput =  'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
export type TInputErros = {
    invalid: boolean;
    message: string;
}