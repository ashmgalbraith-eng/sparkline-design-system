import { colors } from '../../tokens/tokens';

interface BadgeProps {
  variant: 'success' | 'info' | 'warning' | 'error';
  dot?: boolean;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = ({ variant, dot = false, children, size = 'md' }: BadgeProps) => {
  const colorMap = {
    success: colors['alert-success'],
    info: colors['alert-info'],
    warning: colors['alert-warning'],
    error: colors['alert-error'],
  };

  const backgroundColor = colorMap[variant];

  return (
    <span
      style={{
        backgroundColor,
        color: colors['neutral-10'],
        padding: dot ? '4px' : '4px 8px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!dot && children}
    </span>
  );
};