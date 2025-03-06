import { Injectable, signal, WritableSignal } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FormService {
    private _step: WritableSignal<number> = signal(1);
    public readonly step$: Observable<number> = toObservable(this._step);

    public setStep(step:number): void {
        this._step.set(step);
    }

    public nextStep(): void {
        this._step.update(step => step + 1);
    }

    public prevStep(): void {
        this._step.update(step => step - 1);
    }
}