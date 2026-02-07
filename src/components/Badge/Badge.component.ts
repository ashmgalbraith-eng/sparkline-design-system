import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Badge.component.html',
  styleUrls: ['./Badge.css'],
})
export class BadgeComponent {
  @Input() variant: 'success' | 'info' | 'warning' | 'error' = 'success';
  @Input() dot = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() content = '';

  get classes(): string {
    const base = 'sparkline-badge';
    const sizeMap: Record<string, string> = { sm: 'small', md: 'medium', lg: 'large' };
    return [
      base,
      `${base}--${this.variant}`,
      `${base}--${sizeMap[this.size]}`,
      this.dot ? `${base}--dot` : '',
    ].filter(Boolean).join(' ');
  }
}
