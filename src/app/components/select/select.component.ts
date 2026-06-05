import {
  Component, Input, Output, EventEmitter,
  HostListener, ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type SelectState = 'default' | 'error' | 'disabled';

@Component({
  selector: 'sp-select',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() options: SelectOption[] = [];
  @Input() value: string | string[] | null = null;
  @Input() multiple = false;
  @Input() placeholder = 'Select an option';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() state: SelectState = 'default';

  @Output() valueChange = new EventEmitter<string | string[]>();

  isOpen = false;
  isFocused = false;

  constructor(private _el: ElementRef) {}

  get isDisabled(): boolean {
    return this.state === 'disabled';
  }

  get fieldState(): string {
    if (this.isDisabled) return 'disabled';
    if (this.state === 'error') return 'error';
    if (this.isOpen || this.isFocused) return 'focus';
    return 'default';
  }

  get displayValue(): string {
    if (this.multiple) {
      const selected = this.selectedValues;
      if (!selected.length) return '';
      return selected.map(v => this.labelFor(v)).join(', ');
    }
    const v = this.value as string | null;
    return v ? this.labelFor(v) : '';
  }

  get selectedValues(): string[] {
    if (!this.multiple) return [];
    return Array.isArray(this.value) ? this.value : [];
  }

  labelFor(val: string): string {
    return this.options.find(o => o.value === val)?.label ?? val;
  }

  isSelected(option: SelectOption): boolean {
    if (this.multiple) {
      return this.selectedValues.includes(option.value);
    }
    return this.value === option.value;
  }

  toggleOpen(): void {
    if (this.isDisabled) return;
    this.isOpen = !this.isOpen;
  }

  selectOption(option: SelectOption): void {
    if (option.disabled) return;
    if (this.multiple) {
      const current = this.selectedValues;
      const updated = current.includes(option.value)
        ? current.filter(v => v !== option.value)
        : [...current, option.value];
      this.value = updated;
      this.valueChange.emit(updated);
    } else {
      this.value = option.value;
      this.valueChange.emit(option.value);
      this.isOpen = false;
    }
  }

  removeChip(val: string, event: MouseEvent): void {
    event.stopPropagation();
    const updated = this.selectedValues.filter(v => v !== val);
    this.value = updated;
    this.valueChange.emit(updated);
  }

  onTriggerFocus(): void { this.isFocused = true; }
  onTriggerBlur(): void { this.isFocused = false; }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this._el.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }
}
