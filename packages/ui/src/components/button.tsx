import { cn } from '@/packages/ui/src/lib/utils'
import { colors } from '@/packages/design-system/src/colors'
import { typography } from '@/packages/design-system/src/typography'
import { radius } from '@/packages/design-system/src/radius'
import { spacing } from '@/packages/design-system/src/spacing'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  onClick?: () => void
  asChild?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled,
  className,
  onClick,
  asChild,
  type,
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: {
      backgroundColor: colors.orange,
      color: colors.white,
      _hover: {
        backgroundColor: colors.orangeLight,
      },
    },
    secondary: {
      backgroundColor: colors.gray500,
      color: colors.white,
      _hover: {
        backgroundColor: colors.gray600,
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.navy,
      _hover: {
        backgroundColor: colors.gray100,
      },
    },
    danger: {
      backgroundColor: colors.gray600,
      color: colors.white,
      _hover: {
        backgroundColor: colors.gray700,
      },
    },
  }

  const sizeStyles = {
    sm: {
      height: '32px',
      padding: '0 12px',
      fontSize: typography.size.sm,
    },
    md: {
      height: '40px',
      padding: '0 16px',
      fontSize: typography.size.base,
    },
    lg: {
      height: '48px',
      padding: '0 20px',
      fontSize: typography.size.lg,
    },
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded',
        radius.lg,
        `font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
        variantStyles[variant],
        sizeStyles[size],
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    />
  )
}