import { ChangeDetectionStrategy, Component, computed, inject, input, InputSignal, model, ModelSignal, signal, WritableSignal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { TDashInput, TInputErros } from './model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dash-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {

  public type: InputSignal<TDashInput> = input.required();
  public label: InputSignal<string> = input.required();
  public placeholder: InputSignal<string> = input('');

  protected inputValue: ModelSignal<any> = model<any>();
  protected onTouch?: () => void = () => { };
  protected isDisabled: WritableSignal<boolean> = signal(false);
  protected hasErros = computed(() => this.errosHandler());
  private _ngControl: NgControl | null = inject(NgControl, { optional: true });
  constructor() {
    if (this._ngControl) {
      this._ngControl.valueAccessor = this;
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
    if (this._ngControl) {
      this._ngControl.control?.disable({ emitEvent: isDisabled });
    }
  }

  private errosHandler(): TInputErros {
    if (!this._ngControl) return { invalid: false, message: '' };
    if (this.inputValue() && this._ngControl?.touched && this._ngControl?.control?.errors) {
      const error = this._ngControl?.control?.errors as any;
      return { invalid: true, message: error?.message } as TInputErros;
    } else {
      return { invalid: false, message: '' }
    }
  }

}
