import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeColor = 'primary' | 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'sp-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  host: {
    '[class]': 'hostClasses',
  },
})
export class BadgeComponent {
  @Input() label = '999+';
  @Input() color: BadgeColor = 'primary';
  @Input() dot = false;

  get hostClasses(): string {
    return [
      'sp-badge',
      `sp-badge--${this.color}`,
      this.dot ? 'sp-badge--dot' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
