import React from 'react';
import './Input.css';

export interface InputProps {
  /**
   * Input label
   */
  label?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /**
   * Input value
   */
  value?: string;
  /**
   * Input size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Input state
   */
  state?: 'default' | 'error' | 'success' | 'disabled';
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Show leading icon
   */
  iconLeft?: React.ReactNode;
  /**
   * Show trailing icon
   */
  iconRight?: React.ReactNode;
  /**
   * Required field
   */
  required?: boolean;
  /**
   * Change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional additional className
   */
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  size = 'medium',
  state = 'default',
  helperText,
  errorMessage,
  iconLeft,
  iconRight,
  required = false,
  onChange,
  className = '',
}) => {
  const baseClass = 'sparkline-input';
  const wrapperClasses = [
    `${baseClass}-wrapper`,
    className,
  ].filter(Boolean).join(' ');

  const inputClasses = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${state}`,
    iconLeft ? `${baseClass}--with-icon-left` : '',
    iconRight ? `${baseClass}--with-icon-right` : '',
  ].filter(Boolean).join(' ');

  const disabled = state === 'disabled';
  const showError = state === 'error' && errorMessage;
  const showHelper = helperText && !showError;

  return (
    <div className={wrapperClasses} data-component="input">
      {label && (
        <label className={`${baseClass}__label`}>
          {label}
          {required && <span className={`${baseClass}__required`}>*</span>}
        </label>
      )}
      <div className={`${baseClass}__input-wrapper`}>
        {iconLeft && (
          <span className={`${baseClass}__icon ${baseClass}__icon--left`}>
            {iconLeft}
          </span>
        )}
        <input
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
        {iconRight && (
          <span className={`${baseClass}__icon ${baseClass}__icon--right`}>
            {iconRight}
          </span>
        )}
      </div>
      {showError && (
        <span className={`${baseClass}__message ${baseClass}__message--error`}>
          {errorMessage}
        </span>
      )}
      {showHelper && (
        <span className={`${baseClass}__message ${baseClass}__message--helper`}>
          {helperText}
        </span>
      )}
    </div>
  );
};
