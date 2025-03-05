import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@dash-root/app/shared/components/input/input.component';
import { CustomValidators } from '@dash-root/app/shared/validators';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AdmissionFormService } from '../../services/admission-form.service';
import { FooterComponent } from '@dash-root/app/shared/components/footer/footer.component';

@Component({
  selector: 'dash-admission-start',
  imports: [
    ButtonComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FooterComponent
  ],
  templateUrl: './admission-start.component.html',
  styleUrl: './admission-start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdmissionStartComponent implements OnInit {
  private readonly _admissionService = inject(AdmissionFormService);
  private readonly _formBuilder = inject(FormBuilder);
  protected form: FormGroup = this._formBuilder.group({
    cpf: ['', [Validators.required, CustomValidators.cpf]],
  });


  protected onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this._admissionService.nextStep();
  }

  ngOnInit(): void {

  }
}