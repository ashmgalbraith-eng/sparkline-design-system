import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ButtonGroupButton {
  label: string;
  selected?: boolean;
}

@Component({
  selector: 'sparkline-button-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ButtonGroup.component.html',
  styleUrls: ['./ButtonGroup.css'],
})
export class ButtonGroupComponent {
  @Input() buttons: ButtonGroupButton[] = [];
  @Input() size: 'small' | 'large' = 'large';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() showLeftIcons = false;
  @Input() showRightIcons = false;
  @Input() disabled = false;

  get classes(): string {
    const base = 'sparkline-button-group';
    return [
      base,
      `${base}--${this.size}`,
      `${base}--${this.variant}`,
      this.disabled ? `${base}--disabled` : '',
    ].filter(Boolean).join(' ');
  }
}
