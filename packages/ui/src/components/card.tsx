import { cn } from '@/packages/ui/src/lib/utils'

interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered'
}

export const Card = ({
  title,
  children,
  className,
  variant = 'default',
}: CardProps) => {
  const variantStyles = {
    default: '',
    elevated: 'shadow-lg',
    bordered: 'border border-gray-200',
  }

  return (
    <div className={cn(
      'rounded-lg bg-white transition-colors hover:shadow-md hover:bg-gray-50',
      variantStyles[variant],
      'overflow-hidden',
      className
    )}>
      {title && (
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
          <h3 className="font-medium text-sm text-gray-600">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}