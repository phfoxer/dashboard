import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TButtonAppearance, TButtonSize } from './model/button.model';

@Component({
  selector: 'dash-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public onClick: OutputEmitterRef<void> = output<void>();
  public size: InputSignal<TButtonSize> = input<TButtonSize>('md');
  public appearance: InputSignal<TButtonAppearance> = input<TButtonAppearance>('link');

  protected onClickHandler(event:any) {
    this.onClick.emit();
    event.preventDefault();
  }
}
