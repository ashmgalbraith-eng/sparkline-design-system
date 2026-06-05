import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sp-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  host: {
    '[class]': 'hostClasses',
    'role': 'radio',
    '[attr.aria-checked]': 'checked',
    '[attr.aria-disabled]': 'disabled',
    '[attr.tabindex]': 'disabled ? -1 : 0',
    '(click)': 'onToggle()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(mousedown)': 'onMouseDown()',
    '(mouseup)': 'onMouseUp()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
    '(keydown.space)': 'onKeySpace($event)',
  },
})
export class RadioComponent {
  @Input() checked = false;
  @Input() label = 'Radio';
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  private _interactiveState: 'hover' | 'pressed' | 'focus' | null = null;

  get activeState(): string {
    if (this.disabled) return 'disabled';
    if (this._interactiveState === 'pressed') return 'pressed';
    if (this._interactiveState === 'focus') return 'focus';
    if (this._interactiveState === 'hover') return 'hover';
    return 'default';
  }

  get hostClasses(): string {
    return [
      'sp-radio',
      `sp-radio--${this.activeState}`,
      this.checked ? 'sp-radio--checked' : 'sp-radio--unchecked',
    ].join(' ');
  }

  onToggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }

  onMouseEnter(): void {
    if (!this.disabled) this._interactiveState = 'hover';
  }

  onMouseLeave(): void {
    if (this._interactiveState !== 'focus') this._interactiveState = null;
  }

  onMouseDown(): void {
    if (!this.disabled) this._interactiveState = 'pressed';
  }

  onMouseUp(): void {
    if (!this.disabled) this._interactiveState = 'hover';
  }

  onFocus(): void {
    if (!this.disabled) this._interactiveState = 'focus';
  }

  onBlur(): void {
    this._interactiveState = null;
  }

  onKeySpace(event: Event): void {
    event.preventDefault();
    this.onToggle();
  }
}
