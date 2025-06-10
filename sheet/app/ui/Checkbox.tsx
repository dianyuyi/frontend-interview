import React from 'react';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  className?: string;
};
const Checkbox = ({ id, className = '', ...rest }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      id={id}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
      {...rest}
    />
  );
};

export default Checkbox;
