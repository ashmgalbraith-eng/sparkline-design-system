import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Switch.component.html',
  styleUrls: ['./Switch.css'],
})
export class SwitchComponent {
  @Input() label?: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() checkedChange = new EventEmitter<boolean>();

  get classes(): string {
    const base = 'sparkline-switch';
    return [
      base,
      `${base}--${this.size}`,
      this.disabled ? `${base}--disabled` : '',
    ].filter(Boolean).join(' ');
  }

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }
}
