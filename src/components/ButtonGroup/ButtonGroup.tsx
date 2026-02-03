import React from 'react';
import './ButtonGroup.css';

export interface ButtonGroupButton {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

export interface ButtonGroupProps {
  /**
   * Array of buttons to display
   */
  buttons: ButtonGroupButton[];
  /**
   * Button size
   */
  size?: 'small' | 'large';
  /**
   * Visual style variant
   */
  variant?: 'primary' | 'secondary';
  /**
   * Show left icons on buttons
   */
  showLeftIcons?: boolean;
  /**
   * Show right icons on buttons
   */
  showRightIcons?: boolean;
  /**
   * Disabled state for the entire group
   */
  disabled?: boolean;
  /**
   * Optional additional className
   */
  className?: string;
}

const defaultLeftIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const defaultRightIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  size = 'large',
  variant = 'primary',
  showLeftIcons = false,
  showRightIcons = false,
  disabled = false,
  className = '',
}) => {
  const baseClass = 'sparkline-button-group';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${variant}`,
    disabled && `${baseClass}--disabled`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} data-component="button-group">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${baseClass}__button ${button.selected ? `${baseClass}__button--selected` : ''}`}
          onClick={button.onClick}
          disabled={disabled}
        >
          {showLeftIcons && (
            <span className={`${baseClass}__icon`}>
              {button.icon || defaultLeftIcon}
            </span>
          )}
          {button.label && (
            <span className={`${baseClass}__label`}>{button.label}</span>
          )}
          {showRightIcons && (
            <span className={`${baseClass}__icon`}>
              {defaultRightIcon}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};
