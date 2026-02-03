import React from 'react';
import './Card.css';

export interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card variant
   */
  variant?: 'elevated' | 'outlined' | 'filled';
  /**
   * Optional image source
   */
  imageSrc?: string;
  /**
   * Optional image alt text
   */
  imageAlt?: string;
  /**
   * Optional footer content
   */
  footer?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional additional className
   */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'elevated',
  imageSrc,
  imageAlt = '',
  footer,
  onClick,
  className = '',
}) => {
  const baseClass = 'sparkline-card';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    onClick ? `${baseClass}--clickable` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} data-component="card">
      {imageSrc && (
        <div className={`${baseClass}__image`}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
      <div className={`${baseClass}__content`}>
        {title && <h3 className={`${baseClass}__title`}>{title}</h3>}
        <div className={`${baseClass}__body`}>{children}</div>
      </div>
      {footer && <div className={`${baseClass}__footer`}>{footer}</div>}
    </div>
  );
};
