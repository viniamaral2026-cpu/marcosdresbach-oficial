export type VariantClass = 'primary' | 'secondary' | 'ghost' | 'danger'

export type SizeVariant = 'sm' | 'md' | 'lg'

export const buttonVariants = {
  primary: 'bg-orange-600 text-white hover:bg-orange-500',
  secondary: 'bg-gray-700 text-white hover:bg-gray-600',
  ghost: 'text-navy underline-offset-4 hover:underline',
  danger: 'bg-red-600 text-white hover:bg-red-500',
}

export const buttonSizes = {
  sm: 'h-10 px-3 text-sm',
  md: 'h-12 px-4 text-base',
  lg: 'h-14 px-6 text-lg',
}