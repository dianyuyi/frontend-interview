import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
};
const Button = ({
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'outline-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium disabled:pointer-events-none disabled:opacity-50 shrink-0 cursor-pointer',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
