import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = 'medium' | 'small';
export type AvatarType = 'text' | 'image' | 'icon';

@Component({
  selector: 'sp-avatar',
  standalone: true,
  imports: [CommonModule],
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
}
