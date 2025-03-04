import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model, ModelSignal, TemplateRef } from '@angular/core';
import { StepperComponent, StepperFormDirective, StepperStepDirective } from '@dash-components/stepper';

@Component({
  standalone: true,
  selector: 'dash-admission',
  imports: [
    CommonModule,
    StepperComponent,
    StepperStepDirective,
    StepperFormDirective
  ],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdmissionComponent {
  protected activeForm: TemplateRef<HTMLFormElement> | null = null;
  protected step: ModelSignal<number> = model<number>(1);
  setStep(index: number) { 
    this.step.set(index);
  }
}
