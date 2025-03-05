import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChildren, model, ModelSignal, Signal, TemplateRef } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { StepperStepDirective } from './directives/stepper-step/stepper-step.directive';
/**
 * @name Stepper
 * @description
 * The `Stepper` component is a component that allows you to create a stepper component.
 * @link https://zeroheight.com/208c7c4a6/p/625a9e-stepper
 * @output step: ModelSignal<number> - The current step of the stepper.
 * @dependencies StepperStepDirective
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stepper' }
})
export class StepperComponent {

  public step: ModelSignal<number> = model.required();

  protected steps = computed(() => this.buildStepsTemplate());
  protected itemWidth: Signal<number> = computed(() => 100 / this.steps().length);

  private stepsTemlate: Signal<readonly StepperStepDirective[]> = contentChildren(StepperStepDirective);

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
    });
  }

  protected changeStep(step: number) {
    this.step.set(step);
  }

  private buildStepsTemplate(): TemplateRef<HTMLElement>[] {
    return this.stepsTemlate().map((step) => step.templateRef as TemplateRef<HTMLElement>);
  }
}
