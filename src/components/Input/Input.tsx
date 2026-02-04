import React from 'react';
import './Input.css';

export interface InputProps {
  /** Input label */
  label?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Input value */
  value?: string;
  /** Input state */
  state?: 'default' | 'error' | 'success' | 'disabled';
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed below the input (shown when state is error) */
  errorMessage?: string;
  /** Show leading icon */
  iconLeft?: React.ReactNode;
  /** Show trailing icon */
  iconRight?: React.ReactNode;
  /** Mark the field as optional (displays "(optional)" next to label) */
  optional?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional additional className */
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  state = 'default',
  helperText,
  errorMessage,
  iconLeft,
  iconRight,
  optional = false,
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
        <div className={`${baseClass}__label-row`}>
          <label className={`${baseClass}__label`}>
            {label}
          </label>
          {optional && <span className={`${baseClass}__optional`}>(optional)</span>}
        </div>
      )}
      <div className={`${baseClass}__input-wrapper ${baseClass}__input-wrapper--${state}`}>
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
        />
        {iconRight && (
          <span className={`${baseClass}__icon ${baseClass}__icon--right`}>
            {iconRight}
          </span>
        )}
      </div>
      {showError && (
        <div className={`${baseClass}__message-row`}>
          <span className={`${baseClass}__message ${baseClass}__message--error`}>
            {errorMessage}
          </span>
        </div>
      )}
      {showHelper && (
        <div className={`${baseClass}__message-row`}>
          <span className={`${baseClass}__message ${baseClass}__message--helper`}>
            {helperText}
          </span>
        </div>
      )}
    </div>
  );
};
