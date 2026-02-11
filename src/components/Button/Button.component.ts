import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.css'],
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() variant: 'filled' | 'outlined' | 'text' = 'filled';
  @Input() disabled = false;
  @Input() showLeftIcon = false;
  @Input() showRightIcon = false;
  @Output() clicked = new EventEmitter<void>();

  get classes(): string {
    const base = 'sparkline-button';
    return [
      base,
      `${base}--${this.size}`,
      `${base}--${this.variant}`,
      this.disabled ? `${base}--disabled` : '',
    ].filter(Boolean).join(' ');
  }

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
