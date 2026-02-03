import React from 'react';
import './Chip.css';

export interface ChipProps {
  /**
   * Chip label
   */
  label: string;
  /**
   * Chip variant
   */
  variant?: 'outlined' | 'filled';
  /**
   * Show close icon
   */
  closable?: boolean;
  /**
   * Show left icon
   */
  icon?: React.ReactNode;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Close handler
   */
  onClose?: () => void;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Optional additional className
   */
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'outlined',
  closable = false,
  icon,
  disabled = false,
  onClose,
  onClick,
  className = '',
}) => {
  const baseClass = 'sparkline-chip';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    disabled ? `${baseClass}--disabled` : '',
    onClick ? `${baseClass}--clickable` : '',
    className,
  ].filter(Boolean).join(' ');

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose && !disabled) {
      onClose();
    }
  };

  const defaultIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="currentColor"/>
      <path d="M8 8.5C5.51472 8.5 3.5 10.5147 3.5 13V14.5H12.5V13C12.5 10.5147 10.4853 8.5 8 8.5Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div
      className={classes}
      onClick={disabled ? undefined : onClick}
      data-component="chip"
    >
      {icon && (
        <span className={`${baseClass}__icon`}>
          {icon === true ? defaultIcon : icon}
        </span>
      )}
      <span className={`${baseClass}__label`}>{label}</span>
      {closable && (
        <button
          className={`${baseClass}__close`}
          onClick={handleClose}
          disabled={disabled}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};
