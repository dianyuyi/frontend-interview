import React from 'react';
import { twMerge } from 'tailwind-merge';

import Checkbox from '@/ui/Checkbox';

export const TableHeadCell = ({
  className,
  ...props
}: React.ComponentProps<'th'>) => {
  return (
    <th
      className={twMerge(
        "relative inline-flex justify-center items-center grow px-2 py-4  text-primary text-xs first:ml-4 after:content-[''] after:absolute after:top-4 after:bottom-4 after:right-0 after:w-0.5 after:h-4  after:bg-gray-300 last:after:hidden",
        className
      )}
      {...props}
    />
  );
};

export const TableHead = ({
  allSelected,
  onSelectedAllIds,
}: {
  allSelected: boolean;
  onSelectedAllIds: (selected: boolean) => void;
}) => {
  return (
    <tr className="grid grid-cols-12 items-center">
      <TableHeadCell className="col-span-1 px-4 after:hidden grow-0">
        <Checkbox
          id="all"
          checked={allSelected}
          onChange={() => onSelectedAllIds(allSelected)}
        />
      </TableHeadCell>
      <TableHeadCell className="col-span-1">ID</TableHeadCell>
      <TableHeadCell className="col-span-3">CLIENT</TableHeadCell>
      <TableHeadCell className="col-span-1">TOTAL</TableHeadCell>
      <TableHeadCell className="col-span-2">ISSUED DATE</TableHeadCell>
      <TableHeadCell className="col-span-2">BALANCE</TableHeadCell>
      <TableHeadCell className="col-span-2">ACTION</TableHeadCell>
    </tr>
  );
};
