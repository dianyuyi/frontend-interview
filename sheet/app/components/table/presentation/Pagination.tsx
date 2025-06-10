import React from 'react';
import ChevronLeftIcon from '@/ui/icons/chevronLeft';
import ChevronRightIcon from '@/ui/icons/chevronRight';
import { getPageNum } from '../logics';

const Pagination = ({
  total,
  page,
  pageSize,
  onPageChange,
}: {
  total: number | undefined;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) => {
  const { allPage, start, end } = getPageNum(total, page, pageSize);
  return (
    <div className="flex justify-end items-center py-1.5 gap-4">
      <div>
        <span>{start}</span>
        <span>-</span>
        <span>
          {end} of {total}
        </span>
      </div>
      <div className="flex justify-between">
        <ChevronLeftIcon
          className={`${page < 2 ? 'fill-secondary' : 'cursor-pointer'}`}
          onClick={() => {
            if (page < 2) {
              return;
            }
            onPageChange(page - 1);
          }}
        />
        <ChevronRightIcon
          className={`${page >= allPage ? 'fill-secondary' : 'cursor-pointer'}`}
          onClick={() => {
            if (page >= allPage) {
              return;
            }
            onPageChange(page + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
