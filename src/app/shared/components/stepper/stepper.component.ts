import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChildren, effect, inject, model, ModelSignal, signal, Signal, TemplateRef, WritableSignal } from '@angular/core';
import { StepperFormDirective } from './directives/stepper-form/stepper-form.directive';
import { StepperStepDirective } from './directives/stepper-step/stepper-step.directive';
import { StepperService } from './services/stepper.service';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
/**
 * @name Stepper
 * @description
 * The `Stepper` component is a component that allows you to create a stepper component.
 * @link https://zeroheight.com/208c7c4a6/p/625a9e-stepper
 * @usage
 * ```html
 *<dash-stepper [(step)]="step">
 *    <ng-template stepper-step>
 *        <label>Step 1</label>
 *    </ng-template>
 *    <ng-template stepper-step>
 *        <label>Step 2</label>
 *    </ng-template>
 *    <ng-template stepper-step>
 *        <label>Step 3</label>
 *    </ng-template>
 *  <ng-template stepper-form>
 *        @switch (step()) {
 *        @case (1) {
 *        <ng-container [ngTemplateOutlet]="stepOneFormComponent"></ng-container>
 *        }
 *        @case (2) {
 *        <ng-container [ngTemplateOutlet]="stepTwoFormComponent"></ng-container>
 *        }
 *        }
 *    </ng-template>
 *</dash-stepper>
 * ```
 */
@Component({
  standalone: true,
  selector: 'dash-stepper',
  imports: [
    CommonModule
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent {

  public step: ModelSignal<number> = model.required();

  protected form = computed(() => this.buildFormTemplate());
  protected steps = computed(() => this.buildStepsTemplate());
  protected itemWidth: Signal<number> = computed(() => 100 / this.steps().length);

  private readonly _stepperService = inject(StepperService);
  private stepsTemlate: Signal<readonly StepperStepDirective[]> = contentChildren(StepperStepDirective);
  private formTemplate: Signal<readonly StepperFormDirective[]> = contentChildren(StepperFormDirective);

  constructor() {
    toObservable(this.step).pipe(takeUntilDestroyed()).subscribe((step) => {
      const _minItems = 1;
      const _maxItems = this.steps().length;
      if (step < _minItems) {
        this.step.set(_minItems);
        return;
      } else if (step > _maxItems) {
        this.step.set(_maxItems);
        return;
      }
      console.log('Step changed fim', step);
    });
  }

  protected changeStep(step: number) {
    this.step.set(step);
  }

  private buildFormTemplate(): TemplateRef<HTMLFormElement> | null {
    const formTemplateList = this.formTemplate();
    if (formTemplateList.length === 0) {
      throw new Error('No form template found');
    }
    const template = formTemplateList[0].templateRef;
    return template as TemplateRef<HTMLFormElement>;
  }

  private buildStepsTemplate(): TemplateRef<HTMLElement>[] {
    return this.stepsTemlate().map((step) => step.templateRef as TemplateRef<HTMLElement>);
  }
}
