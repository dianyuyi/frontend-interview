import React from 'react';

const Checkbox = ({
  id,
  text = '',
  className = '',
  ...props
}: {
  className?: string;
  id: string;
  text?: string;
}) => {
  return (
      <input
        type="checkbox"
        id={id}
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500'
        {...props}
      />

  );
};

export default Checkbox;
