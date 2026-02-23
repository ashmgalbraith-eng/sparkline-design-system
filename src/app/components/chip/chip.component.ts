import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

export type ChipType = 'clearable' | 'plain';
export type ChipStyle = 'outlined' | 'filled';
export type ChipState = 'default' | 'hover' | 'pressed' | 'focus' | 'disabled';

@Component({
  selector: 'sp-chip',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  host: {
    '[class]': 'hostClasses',
    '[attr.tabindex]': "state === 'disabled' ? -1 : 0",
    '[attr.aria-disabled]': "state === 'disabled'",
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(mousedown)': 'onMouseDown()',
    '(mouseup)': 'onMouseUp()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
  },
})
export class ChipComponent {
  @Input() label = 'Chip';
  @Input() type: ChipType = 'plain';
  @Input() style: ChipStyle = 'outlined';
  @Input() state: ChipState = 'default';
  @Input() showLeftIcon = false;
  @Input() showRightIcon = false;

  @Output() removed = new EventEmitter<void>();

  private _interactiveState: 'hover' | 'pressed' | 'focus' | null = null;

  get hostClasses(): string {
    return [
      'sp-chip',
      `sp-chip--${this.type}`,
      `sp-chip--${this.style}`,
      `sp-chip--${this.activeState}`,
    ].join(' ');
  }

  get activeState(): ChipState {
    if (this.state === 'disabled') return 'disabled';
    if (this._interactiveState === 'pressed') return 'pressed';
    if (this._interactiveState === 'focus') return 'focus';
    if (this._interactiveState === 'hover') return 'hover';
    return this.state;
  }

  get shouldShowRightIcon(): boolean {
    return this.type === 'clearable' || this.showRightIcon;
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

  onRemove(event: MouseEvent): void {
    event.stopPropagation();
    if (this.state !== 'disabled') {
      this.removed.emit();
    }
  }
}
