import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Custom validator for CPF
 * @param control AbstractControl
 * @returns ValidationErrors | null
 * @example
 * ```typescript
 * protected form: FormGroup = this._formBuilder.group({
 *    cpf: ['', [Validators.required, CustomValidators.cpf]],
 *   });
 * ```
 */
export function CPFValidator(control: AbstractControl): ValidationErrors | null {
  const cpf = control.value;
  const errorMsg =  'Informe um cpf válido' ;
  if (!cpf) {
    return null;
  }

  // Remove non-numeric characters
  const cleanedCpf = cpf.replace(/\D/g, '');

  // Check if the cleaned CPF has 11 digits
  if (cleanedCpf.length !== 11) {
    return { invalidCpf: true, message: errorMsg };
  }

  // Check for known invalid CPFs
  const invalidCpfs = [
    '00000000000', '11111111111', '22222222222', '33333333333',
    '44444444444', '55555555555', '66666666666', '77777777777',
    '88888888888', '99999999999'
  ];
  if (invalidCpfs.includes(cleanedCpf)) {
    return { invalidCpf: true, message: errorMsg  };
  }

  // Validate CPF using the algorithm
  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanedCpf.substring(i - 1, i), 10) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cleanedCpf.substring(9, 10), 10)) {
    return { invalidCpf: true, message: errorMsg  };
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanedCpf.substring(i - 1, i), 10) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cleanedCpf.substring(10, 11), 10)) {
    return { invalidCpf: true, message: errorMsg  };
  }
  return null;
}