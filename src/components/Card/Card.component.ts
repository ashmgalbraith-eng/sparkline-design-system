import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.css'],
})
export class CardComponent {
  @Input() title?: string;
  @Input() variant: 'elevated' | 'outlined' | 'filled' = 'elevated';
  @Input() imageSrc?: string;
  @Input() imageAlt = '';
  @Input() clickable = false;
  @Input() bodyText = '';
  @Output() cardClick = new EventEmitter<void>();

  get classes(): string {
    const base = 'sparkline-card';
    return [
      base,
      `${base}--${this.variant}`,
      this.clickable ? `${base}--clickable` : '',
    ].filter(Boolean).join(' ');
  }

  onClick(): void {
    if (this.clickable) {
      this.cardClick.emit();
    }
  }
}
