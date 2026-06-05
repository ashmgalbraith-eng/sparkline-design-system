import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeType = 'numeric' | 'dot';
export type BadgeStatus = 'success' | 'error' | 'warning' | 'info' | 'notification';

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
  @Input() label = '9';
  @Input() type: BadgeType = 'numeric';
  @Input() status: BadgeStatus = 'notification';

  get hostClasses(): string {
    return [
      'sp-badge',
      `sp-badge--${this.type}`,
      `sp-badge--${this.status}`,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
