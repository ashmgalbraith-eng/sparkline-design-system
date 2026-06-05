import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { BadgeComponent } from '../badge/badge.component';
import type { BadgeStatus } from '../badge/badge.component';

export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarType = 'text' | 'image' | 'icon';

@Component({
  selector: 'sp-avatar',
  standalone: true,
  imports: [CommonModule, IconComponent, BadgeComponent],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() size: AvatarSize = 'medium';
  @Input() type: AvatarType = 'text';
  @Input() initials = 'A';
  @Input() imageSrc = '';
  @Input() imageAlt = 'Avatar';
  @Input() showNotification = false;
  @Input() notificationCount = '999+';
  @Input() showStatus = false;
  @Input() statusColor: BadgeStatus = 'success';

  get iconSize(): number {
    if (this.size === 'large') return 16;
    if (this.size === 'medium') return 16;
    return 12;
  }

  get displayInitials(): string {
    if (this.size === 'large') return this.initials.slice(0, 2).toUpperCase();
    return this.initials.slice(0, 1).toUpperCase();
  }

  get displayNotificationCount(): string {
    return this.notificationCount.slice(0, 4);
  }
}
