import { ChangeDetectionStrategy, Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from '@dash-root/app/shared/components/card/card.component';
import { FooterComponent } from '@dash-root/app/shared/components/footer/footer.component';
import { InputComponent } from '@dash-root/app/shared/components/input/input.component';
import { CustomValidators } from '@dash-root/app/shared/validators';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { TUser } from '../../export/admission.model';
import { AdmissionService } from '../../services/admission.service';
import { FormService } from '../../services/admission-form.service';

@Component({
  selector: 'dash-admission-start',
  imports: [
    ButtonComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FooterComponent,
    CardComponent,
  ],
  templateUrl: './admission-start.component.html',
  styleUrl: './admission-start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdmissionStartComponent {
  private readonly _formService = inject(FormService);
  private readonly _admissionService = inject(AdmissionService);
  private readonly _formBuilder = inject(FormBuilder);

  protected form: FormGroup = this._formBuilder.group({
    cpf: ['', [Validators.required, CustomValidators.cpf]],
  });
  protected isLoading: WritableSignal<boolean> = signal(false);
  protected user: WritableSignal<TUser | null> = signal(null);
  protected disableSubmit = computed(() => this.isLoading() || !!this.user());



  protected onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.isLoading.set(true);
    this._admissionService.getUseByCpf(this.form.value.cpf).subscribe({
      next: user => {
        this.user.set(user);
        this.isLoading.set(false);
        this.form.get('cpf')?.disable();
      },
      error: () => {
        this.isLoading.set(false);
      }
    });

  }

  protected goToDocumentation(): void {
    this._formService.setStep(2);
  }

}