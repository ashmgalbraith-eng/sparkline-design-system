import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

export type InputState = 'default' | 'focus' | 'error' | 'disabled';

@Component({
  selector: 'sp-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = 'Placeholder';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() state: InputState = 'default';
  @Input() showLeftIcon = false;
  @Input() showRightIcon = false;

  @Output() valueChange = new EventEmitter<string>();

  value = '';
  private _focused = false;

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  get fieldState(): InputState {
    if (this.state === 'disabled') return 'disabled';
    if (this.state === 'error') return 'error';
    if (this._focused) return 'focus';
    return this.state;
  }

  get hostClasses(): string {
    return `sp-input sp-input--${this.fieldState}`;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this._focused = true;
    this.onTouched();
  }

  onBlur(): void {
    this._focused = false;
  }

  writeValue(val: string): void {
    this.value = val ?? '';
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.state = isDisabled ? 'disabled' : 'default';
  }
}
