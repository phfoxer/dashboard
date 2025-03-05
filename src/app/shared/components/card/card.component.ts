import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'dash-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public title: InputSignal<string> = input.required<string>();
  public subtitle: InputSignal<string> = input<string>('');
}
