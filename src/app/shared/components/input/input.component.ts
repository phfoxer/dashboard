import { ChangeDetectionStrategy, Component, inject, input, InputSignal, model, ModelSignal, Optional, signal, WritableSignal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { TDashInput } from './model';

@Component({
  selector: 'dash-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {

  public type: InputSignal<TDashInput> = input.required();
  public label: InputSignal<string> = input.required();

  protected inputValue: ModelSignal<any> = model<any>();
  protected onTouch?: () => void = () => { };
  protected isDisabled: WritableSignal<boolean> = signal(false);

  private ngControl = inject(NgControl, { optional: true });
  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public writeValue(obj: any): void {
    this.inputValue.set(obj);
  }

  public registerOnChange(fn: any): void {
    this.inputValue.subscribe(fn);
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
    if (this.ngControl) {
      this.ngControl.control?.disable({ emitEvent: isDisabled });
    }
  }
}
