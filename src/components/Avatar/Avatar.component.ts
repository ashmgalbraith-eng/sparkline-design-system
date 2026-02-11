import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Avatar.component.html',
  styleUrls: ['./Avatar.css'],
})
export class AvatarComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() type: 'text' | 'icon' | 'image' = 'text';
  @Input() text = 'A';
  @Input() imageSrc?: string;
  @Input() imageAlt = 'Avatar';
  @Input() showNotification = false;
  @Input() notificationCount: string | number = '999+';
  @Input() showStatus = false;
  @Input() status: 'online' | 'offline' | 'away' | 'busy' = 'online';

  get displayText(): string {
    if (this.type !== 'text') return '';
    if (this.size === 'large') return this.text.slice(0, 2).toUpperCase();
    return this.text.slice(0, 1).toUpperCase();
  }
}
