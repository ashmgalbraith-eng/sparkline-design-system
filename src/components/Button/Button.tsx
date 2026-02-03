import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button label text
   */
  label: string;
  /**
   * Button size variant
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button type/style variant
   */
  variant?: 'filled' | 'outlined' | 'text';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Show left icon
   */
  showLeftIcon?: boolean;
  /**
   * Show right icon
   */
  showRightIcon?: boolean;
  /**
   * Custom left icon component
   */
  iconLeft?: React.ReactNode;
  /**
   * Custom right icon component
   */
  iconRight?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional additional className
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'large',
  variant = 'filled',
  disabled = false,
  showLeftIcon = false,
  showRightIcon = false,
  iconLeft,
  iconRight,
  onClick,
  className = '',
}) => {
  const baseClass = 'sparkline-button';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${variant}`,
    disabled && `${baseClass}--disabled`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      data-component="button"
    >
      {showLeftIcon && (
        <span className={`${baseClass}__icon ${baseClass}__icon--left`}>
          {iconLeft || (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      )}
      <span className={`${baseClass}__label`}>{label}</span>
      {showRightIcon && (
        <span className={`${baseClass}__icon ${baseClass}__icon--right`}>
          {iconRight || (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      )}
    </button>
  );
};
