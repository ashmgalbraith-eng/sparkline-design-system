import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

@Component({
  selector: 'sp-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[class]': 'hostClasses',
  },
})
export class CardComponent {
  @Input() variant: CardVariant = 'elevated';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  get hostClasses(): string {
    return [
      'sp-card',
      `sp-card--${this.variant}`,
      `sp-card--pad-${this.padding}`,
    ].join(' ');
  }
}
