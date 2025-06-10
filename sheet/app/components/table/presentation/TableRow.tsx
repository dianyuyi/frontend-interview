import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AccountData } from '@/api/mock';

import formatCurrency from '@/utils/formatCurrency';
import formateDate from '@/utils/formatDate';
import { formatId, getAvatarUrl, PaidStatus } from '../logics';

import Checkbox from '@/ui/Checkbox';
import Avatar from '@/ui/Avatar';
import EyeIcon from '@/ui/icons/eye';
import TrashIcon from '@/ui/icons/trash';

export const TableCell = ({
  className,
  ...props
}: React.ComponentProps<'td'>) => {
  return (
    <td
      className={twMerge(
        'relative inline-flex justify-center items-center text-left grow px-2 py-4  text-primary text-xs first:ml-4',
        className
      )}
      {...props}
    />
  );
};

export const TableRow = ({
  data,
  selectedIds,
  onSelectedIdsChange,
  onDelete,
}: {
  data: AccountData;
  selectedIds: number[];
  onSelectedIdsChange: (id: number) => void;
  onDelete: (id: number[]) => void;
}) => {
  const { id, name, mail, totalBalance, issueDate, balance, hasPaid } = data;

  const [showBalance, setShowBalance] = useState(false);
  const handleShow = () => setShowBalance(!showBalance);
  const isChecked = selectedIds.includes(id);

  return (
    <tr className="grid grid-cols-12 items-center">
      <TableCell className="col-span-1 px-4 after:hidden grow-0">
        <Checkbox
          id="single"
          checked={isChecked}
          onChange={() => onSelectedIdsChange(id)}
        />
      </TableCell>
      <TableCell className="col-span-1 text-theme-main">
        #{formatId(id)}
      </TableCell>
      <TableCell className="col-span-3">
        <div className="flex gap-1.5">
          <Avatar
            src={getAvatarUrl(id)}
            alt={`User-${id}`}
            width={34}
            height={34}
          />
          <div className="w-[158px] overflow-hidden">
            <p className="text-primary text-sm">{name}</p>
            <p className="text-secondary">{mail}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="col-span-1 text-secondary text-sm">
        {formatCurrency(totalBalance)}
      </TableCell>
      <TableCell className="col-span-2 text-secondary text-sm">
        {formateDate(issueDate)}
      </TableCell>
      <TableCell className="col-span-2 text-primary text-sm">
        {showBalance ? formatCurrency(balance) : PaidStatus(hasPaid)}
      </TableCell>
      <TableCell className="col-span-2 gap-4">
        <TrashIcon
          className="fill-secondary cursor-pointer"
          onClick={() => onDelete([id])}
        />
        <EyeIcon
          className={`fill-secondary cursor-pointer ${showBalance && 'opacity-50'}`}
          onClick={handleShow}
        />
      </TableCell>
    </tr>
  );
};
