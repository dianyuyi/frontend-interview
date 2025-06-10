import React from 'react';
import { twMerge } from 'tailwind-merge';


const Button = ({ className = '', disabled = false, ...rest }) => {
  return (
    <button
      className={twMerge('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium disabled:pointer-events-none disabled:opacity-50  shrink-0  outline-none', className)}
      {...rest}
    />
  );
};

export default Button;
