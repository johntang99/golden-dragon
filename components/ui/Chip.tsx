interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Chip({ children, variant = 'default', size = 'sm', className = '' }: ChipProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-colors';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700 border border-gray-200',
    primary: 'bg-[var(--brand)] text-white',
    secondary: 'bg-[var(--secondary-50)] text-[var(--secondary)] border border-[var(--secondary)]',
  };
  
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-smallall',
    md: 'px-3 py-1.5 text-small',
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
}
