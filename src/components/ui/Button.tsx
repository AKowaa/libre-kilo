interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-lime-500 text-white hover:bg-lime-600 focus:ring-lime-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
