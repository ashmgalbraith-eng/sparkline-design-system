import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Chip.component.html',
  styleUrls: ['./Chip.css'],
})
export class ChipComponent {
  @Input() label = '';
  @Input() variant: 'outlined' | 'filled' = 'outlined';
  @Input() closable = false;
  @Input() showIcon = false;
  @Input() disabled = false;
  @Input() clickable = false;
  @Output() closed = new EventEmitter<void>();
  @Output() chipClick = new EventEmitter<void>();

  get classes(): string {
    const base = 'sparkline-chip';
    return [
      base,
      `${base}--${this.variant}`,
      this.disabled ? `${base}--disabled` : '',
      this.clickable ? `${base}--clickable` : '',
    ].filter(Boolean).join(' ');
  }

  onClose(event: Event): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.closed.emit();
    }
  }

  onClick(): void {
    if (!this.disabled && this.clickable) {
      this.chipClick.emit();
    }
  }
}
