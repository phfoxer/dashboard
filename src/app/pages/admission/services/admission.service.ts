import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { CPF_STATUS } from "../export/admission.model";

@Injectable({ providedIn: 'root' })
export class AdmissionService { 

    public getUseByCpf(_: string):Observable<any> { 
        return of({
            cpf: '551.543.680-61',
            name: 'Mariane de Sousa Oliveira',
            status: CPF_STATUS.REGULAR,
        }).pipe(delay(1500));
    }
}