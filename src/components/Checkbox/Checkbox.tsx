import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  /**
   * Checkbox label
   */
  label?: string;
  /**
   * Checked state
   */
  checked?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Indeterminate state
   */
  indeterminate?: boolean;
  /**
   * Change handler
   */
  onChange?: (checked: boolean) => void;
  /**
   * Optional additional className
   */
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  indeterminate = false,
  onChange,
  className = '',
}) => {
  const baseClass = 'sparkline-checkbox';
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={`${baseClass} ${disabled ? `${baseClass}--disabled` : ''} ${className}`} data-component="checkbox">
      <input
        ref={checkboxRef}
        type="checkbox"
        className={`${baseClass}__input`}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={`${baseClass}__checkmark`}>
        {checked && !indeterminate && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {indeterminate && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6H10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </span>
      {label && <span className={`${baseClass}__label`}>{label}</span>}
    </label>
  );
};
