import { Component, Input } from '@angular/core';
import { ICON_REGISTRY, IconName } from './icon-registry';
import { IconComponent } from './icon.component';

@Component({
  selector: 'sp-icon-gallery',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="icon-gallery">
      @for (name of iconNames; track name) {
        <div class="icon-gallery__item">
          <sp-icon [name]="name" [size]="size" [color]="color"></sp-icon>
          <span class="icon-gallery__label">{{ name }}</span>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .icon-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 24px;
        padding: 16px;
      }

      .icon-gallery__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px 8px;
        border: 1px solid #d6d6d6;
        border-radius: 8px;
        text-align: center;
      }

      .icon-gallery__label {
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        color: #757575;
        word-break: break-all;
      }
    `,
  ],
})
export class IconGalleryComponent {
  @Input() size: number = 24;
  @Input() color: string = 'var(--neutral-90)';

  iconNames: string[] = Object.keys(ICON_REGISTRY);
}
