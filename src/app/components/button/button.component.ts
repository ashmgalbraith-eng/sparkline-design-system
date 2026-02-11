import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonType = 'filled' | 'outlined' | 'text';
export type ButtonSize = 'large' | 'small';
export type ButtonState = 'default' | 'hover' | 'pressed' | 'focus' | 'disabled';

@Component({
  selector: 'sp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class]': 'hostClasses',
    '[class.sp-button--disabled]': "state === 'disabled'",
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(mousedown)': 'onMouseDown()',
    '(mouseup)': 'onMouseUp()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
    '(click)': 'onClick($event)',
    '[attr.tabindex]': "state === 'disabled' ? -1 : 0",
    'role': 'button',
    '[attr.aria-disabled]': "state === 'disabled'",
  },
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() type: ButtonType = 'filled';
  @Input() size: ButtonSize = 'large';
  @Input() state: ButtonState = 'default';
  @Input() showLeftIcon = false;
  @Input() showRightIcon = false;
  @Input() showText = true;

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  private _interactiveState: 'hover' | 'pressed' | 'focus' | null = null;

  get hostClasses(): string {
    return [
      'sp-button',
      `sp-button--${this.type}`,
      `sp-button--${this.size}`,
      `sp-button--${this.activeState}`,
    ].join(' ');
  }

  get activeState(): ButtonState {
    if (this.state === 'disabled') return 'disabled';
    if (this._interactiveState === 'pressed') return 'pressed';
    if (this._interactiveState === 'focus') return 'focus';
    if (this._interactiveState === 'hover') return 'hover';
    return this.state;
  }

  onMouseEnter(): void {
    if (this.state !== 'disabled') this._interactiveState = 'hover';
  }

  onMouseLeave(): void {
    if (this._interactiveState !== 'focus') this._interactiveState = null;
  }

  onMouseDown(): void {
    if (this.state !== 'disabled') this._interactiveState = 'pressed';
  }

  onMouseUp(): void {
    if (this.state !== 'disabled') this._interactiveState = 'hover';
  }

  onFocus(): void {
    if (this.state !== 'disabled') this._interactiveState = 'focus';
  }

  onBlur(): void {
    this._interactiveState = null;
  }

  onClick(event: MouseEvent): void {
    if (this.state !== 'disabled') {
      this.buttonClick.emit(event);
    }
  }
}
