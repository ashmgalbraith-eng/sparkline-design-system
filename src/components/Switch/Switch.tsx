import React from 'react';
import './Switch.css';

export interface SwitchProps {
  /**
   * Switch label
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
   * Switch size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Change handler
   */
  onChange?: (checked: boolean) => void;
  /**
   * Optional additional className
   */
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked = false,
  disabled = false,
  size = 'medium',
  onChange,
  className = '',
}) => {
  const baseClass = 'sparkline-switch';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label
      className={`${baseClass} ${baseClass}--${size} ${disabled ? `${baseClass}--disabled` : ''} ${className}`}
      data-component="switch"
    >
      <input
        type="checkbox"
        className={`${baseClass}__input`}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={`${baseClass}__slider`}>
        <span className={`${baseClass}__thumb`} />
      </span>
      {label && <span className={`${baseClass}__label`}>{label}</span>}
    </label>
  );
};
