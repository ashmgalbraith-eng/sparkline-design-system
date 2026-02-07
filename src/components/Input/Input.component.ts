import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.css'],
})
export class InputComponent {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';
  @Input() value?: string;
  @Input() state: 'default' | 'error' | 'success' | 'disabled' = 'default';
  @Input() helperText?: string;
  @Input() errorMessage?: string;
  @Input() showIconLeft = false;
  @Input() showIconRight = false;
  @Input() optional = false;
  @Output() valueChange = new EventEmitter<string>();

  get isDisabled(): boolean {
    return this.state === 'disabled';
  }

  get showError(): boolean {
    return this.state === 'error' && !!this.errorMessage;
  }

  get showHelper(): boolean {
    return !!this.helperText && !this.showError;
  }

  get inputClasses(): string {
    const base = 'sparkline-input';
    return [
      base,
      `${base}--${this.state}`,
      this.showIconLeft ? `${base}--with-icon-left` : '',
      this.showIconRight ? `${base}--with-icon-right` : '',
    ].filter(Boolean).join(' ');
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
