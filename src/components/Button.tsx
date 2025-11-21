'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  // We don't need to explicitly list onClick, type, disabled, style as they are in ButtonHTMLAttributes
  // But we might need to handle the fact that it could be an anchor
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  href,
  type = 'button',
  ...props
}: ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white focus:ring-primary-500'
  };
  
  // Check if className contains text color override
  const hasTextColorOverride = className.includes('text-');
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  // Apply variant classes but remove text color if override is provided
  let appliedVariantClasses = variantClasses[variant];
  if (hasTextColorOverride) {
    appliedVariantClasses = appliedVariantClasses.replace(/text-\w+/g, '');
  }
  
  const classes = `${baseClasses} ${appliedVariantClasses} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      className={classes} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
