import { Injectable, signal, WritableSignal } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class StepperService { 
    private _step: WritableSignal<number> = signal(0);
    public readonly step$: Observable<number> = toObservable(this._step);

    setStep(index: number) { 
        this._step.set(index);
    }
}