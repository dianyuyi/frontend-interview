import { twMerge } from 'tailwind-merge';

export const Skeleton = ({ className = '' }) => (
  <div
    className={twMerge(
      'w-full h-4 animate-pulse bg-gray-200 rounded',
      className
    )}
  ></div>
);
