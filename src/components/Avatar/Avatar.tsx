import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  /**
   * Avatar size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Avatar type/content
   */
  type?: 'text' | 'icon' | 'image';
  /**
   * Text to display (for text type)
   */
  text?: string;
  /**
   * Image source URL (for image type)
   */
  imageSrc?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Show notification badge
   */
  showNotification?: boolean;
  /**
   * Notification count
   */
  notificationCount?: string | number;
  /**
   * Show online status indicator
   */
  showStatus?: boolean;
  /**
   * Status type
   */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /**
   * Optional additional className
   */
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'small',
  type = 'text',
  text = 'A',
  imageSrc,
  imageAlt = 'Avatar',
  showNotification = false,
  notificationCount = '999+',
  showStatus = false,
  status = 'online',
  className = '',
}) => {
  const baseClass = 'sparkline-avatar';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${type}`,
    className,
  ].filter(Boolean).join(' ');

  // Get display text based on size
  const getDisplayText = () => {
    if (type !== 'text') return '';
    if (size === 'large') return text.slice(0, 2).toUpperCase();
    return text.slice(0, 1).toUpperCase();
  };

  return (
    <div className={classes} data-component="avatar">
      <div className={`${baseClass}__container`}>
        {/* Text Avatar */}
        {type === 'text' && (
          <div className={`${baseClass}__content ${baseClass}__content--text`}>
            <span className={`${baseClass}__text`}>{getDisplayText()}</span>
          </div>
        )}

        {/* Image Avatar */}
        {type === 'image' && imageSrc && (
          <div className={`${baseClass}__content ${baseClass}__content--image`}>
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className={`${baseClass}__image`}
            />
          </div>
        )}

        {/* Icon Avatar */}
        {type === 'icon' && (
          <div className={`${baseClass}__content ${baseClass}__content--icon`}>
            <svg 
              className={`${baseClass}__icon`}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        )}

        {/* Status Indicator */}
        {showStatus && (
          <div className={`${baseClass}__status ${baseClass}__status--${status}`}>
            <svg 
              className={`${baseClass}__status-icon`}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" 
                fill="white"
              />
            </svg>
          </div>
        )}

        {/* Notification Badge */}
        {showNotification && (
          <div className={`${baseClass}__notification`}>
            <span className={`${baseClass}__notification-text`}>
              {notificationCount}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
