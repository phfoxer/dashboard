import { CommonModule, KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, model, ModelSignal, OnInit, TemplateRef } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Router, RouterOutlet } from '@angular/router';
import { StepperComponent, StepperStepDirective } from '@dash-components/stepper';
import { STEP_LIST } from './export/admission.model';
import { AdmissionFormService } from './services/admission-form.service';

@Component({
  selector: 'dash-admission',
  imports: [
    CommonModule,
    StepperComponent,
    StepperStepDirective,
    RouterOutlet
  ],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'wrapper' }
})
export class AdmissionComponent implements OnInit {
  protected activeForm: TemplateRef<HTMLFormElement> | null = null;
  protected step: ModelSignal<number> = model<number>(1);
  protected stepList: KeyValue<string, string>[] = STEP_LIST;

  private readonly _router = inject(Router);
  private readonly _admissionService = inject(AdmissionFormService);

  constructor() {
    toObservable(this.step).subscribe((step) => {
      const current = this.stepList[step - 1];
      if (!current) return;
      this._admissionService.setStep(step);
      this._router.navigate([`/admissao/${current.key}`]);
    });

    this._admissionService.step$.pipe(takeUntilDestroyed()).subscribe((step) => {
      if (this.step() === step) return;
      this.step.set(step);
    });
  }

  public ngOnInit(): void {

  }

}
