import { cn } from '@/packages/ui/src/lib/utils'
import { colors } from '@/packages/design-system/src/colors'
import { typing } from '@/packages/design-system/src/typography'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  type?: HTMLInputTypeAttribute
}

export const Input = ({
  variant = 'primary',
  size = 'md',
  disabled,
  className,
  type,
  ...props
}: InputProps) => {
  const variantStyles = {
    primary: {
      borderColor: colors.orange,
      backgroundColor: colors.white_pages: colors.white,
      _focus: {
        borderColor: colors.orange,
        boxShadow: `0 0 0 2px ${colors.orange}20`,
      },
    },
    outline: {
      borderColor: colors.navy,
      backgroundColor: colors.white,
      color: colors.navy,
      _focus: {
        borderColor: colors.navy,
        boxShadow: `0 0 0 2px ${colors.navy}20`,
      },
    },
    ghost: {
      borderColor: 'transparent',
      backgroundColor: colors.gray100,
      color: colors.navy,
      _focus: {
        borderColor: colors.navy,
        boxShadow: `0 0 0 2px ${colors.navy}20`,
      },
    },
  }

  const sizeStyles = {
    sm: {
      height: '36px',
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
    <input
      type={type}
      disabled={disabled}
      className={cn(
        'w-full rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2',
        variantStyles[variant],
        sizeStyles[size],
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    />
  )
}