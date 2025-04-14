import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out text-sm sm:text-base md:text-lg ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
