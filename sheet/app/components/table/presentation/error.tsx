import React from 'react';
import Button from '@/ui/Button';

const Error = ({
  isEmpty,
  onRefresh,
}: {
  isEmpty: boolean;
  onRefresh: () => void;
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-12 shadow-paper gap-4">
        <p> {isEmpty ? 'List is empty' : 'Something wrong. Please retry.'}</p>
        <Button
          className="w-[150px] bg-theme-main text-white px-3 py-2"
          onClick={onRefresh}
        >
          REFRESH INVOICE
        </Button>
      </div>
    </div>
  );
};

export default Error;
