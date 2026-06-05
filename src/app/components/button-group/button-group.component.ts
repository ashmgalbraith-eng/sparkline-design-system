import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

export type ButtonGroupSize = 'large' | 'small';

export interface ButtonGroupItem {
  label: string;
  leftIconName: string;
  rightIconName: string;
}

@Component({
  selector: 'sp-button-group',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent {
  @Input() items: ButtonGroupItem[] = [
    { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
    { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
  ];
  @Input() size: ButtonGroupSize = 'large';
  @Input() showLeftIcon = false;
  @Input() showRightIcon = false;
  @Input() showLabel = true;
  @Input() disabled = false;
  @Input() activeIndex = 0;

  @HostBinding('class.sp-button-group--disabled')
  get hostDisabled(): boolean {
    return this.disabled;
  }

  @Output() selectionChange = new EventEmitter<number>();

  select(index: number): void {
    if (this.disabled) return;
    this.activeIndex = index;
    this.selectionChange.emit(index);
  }
}
