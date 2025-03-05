import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { CPF_STATUS } from "../export/admission.model";

@Injectable({ providedIn: 'root' })
export class AdmissionService { 

    public getUseByCpf(_: string):Observable<any> { 
        return of({
            cpf: '55154368061',
            name: 'Paulo Henrique Santos',
            status: CPF_STATUS.REGULAR,
        }).pipe(delay(1500));
    }
}