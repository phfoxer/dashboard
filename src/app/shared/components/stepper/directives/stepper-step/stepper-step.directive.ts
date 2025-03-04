import { Directive, inject, TemplateRef } from "@angular/core";

@Directive({
    selector: '[stepper-step]'
})
export class StepperStepDirective {
    public templateRef: TemplateRef<HTMLElement> = inject(TemplateRef);
}