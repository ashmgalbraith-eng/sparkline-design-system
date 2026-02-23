import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICON_REGISTRY, IconName } from './icon-registry';

@Component({
  selector: 'sp-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [style.color]="color"
    >
      <path [attr.d]="path" fill="currentColor" />
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }
    `,
  ],
})
export class IconComponent {
  @Input() name: IconName | string = 'check';
  @Input() size: number = 24;
  @Input() color: string = 'var(--neutral-90)';

  get path(): string {
    return ICON_REGISTRY[this.name as IconName] ?? '';
  }
}
