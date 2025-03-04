import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[stepper-form]'
})
export class StepperFormDirective { 
   
    constructor(public templateRef: TemplateRef<any>) {}
}