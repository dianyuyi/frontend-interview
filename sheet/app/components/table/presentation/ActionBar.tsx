import React from 'react';
import Button from '@/ui/Button';

export const ActionBar = ({
  search,
  onSearch,
  onDeleteAll,
  onRefresh,
}: {
  search: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteAll: () => void;
  onRefresh: () => void;
}) => {
  return (
    <div className="flex justify-end gap-3 py-5">
      <input
        type="text"
        value={search}
        placeholder="Search Invoice"
        className="w-[150px] border border-outline rounded-sm text-disabled focus:text-primary px-3 py-2 ml-1.5"
        onChange={onSearch}
      ></input>
      <Button
        className="w-[150px] bg-warning-main text-white px-3 py-2"
        onClick={onDeleteAll}
      >
        DELETE
      </Button>
      <Button
        className="w-[150px] bg-theme-main text-white px-3 py-2"
        onClick={onRefresh}
      >
        REFRESH INVOICE
      </Button>
    </div>
  );
};

export default ActionBar;
