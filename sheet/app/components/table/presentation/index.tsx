import React from 'react';
import { twMerge } from 'tailwind-merge';
import Checkbox from '@/ui/Checkbox';
import Button from '@/ui/Botton';
import Avatar from '@/ui/Avatar';
import { AccountData } from '@/api/mock';
import EyeIcon from '@/ui/icons/eye';
import TrashIcon from '@/ui/icons/trash';
import ChevronLeftIcon from '@/ui/icons/chevronLeft';
import ChevronRightIcon from '@/ui/icons/chevronRight';

export const ActionBar = () => {
  return (
    <div className="flex justify-end gap-3 py-5">
      <input
        type="text"
        placeholder="Search Invoice"
        className="w-[150px] border border-outline rounded-sm text-disabled focus:text-primary px-3 py-2 ml-1.5"
      ></input>
      <Button className="w-[150px] bg-warning-main text-white px-3 py-2">
        DELETE
      </Button>
      <Button className="w-[150px] bg-theme-main text-white px-3 py-2">
        REFRESH INVOICE
      </Button>
    </div>
  );
};

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

export const TableCell = ({
  className,
  ...props
}: React.ComponentProps<'td'>) => {
  return (
    <td
      className={twMerge(
        'relative inline-flex justify-center items-center grow px-2 py-4  text-primary text-xs first:ml-4',
        className
      )}
      {...props}
    />
  );
};

export const TableHead = () => {
  return (
    <tr className="grid grid-cols-12 items-center">
      <TableHeadCell className="col-span-1 px-4 after:hidden grow-0">
        <Checkbox id="all" />
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

export const TableRow = ({ data }: { data: AccountData }) => {
  const { id, name, mail, totalBalance, issueDate, balance, hasPaid } = data;
  return (
    <tr className="grid grid-cols-12 items-center">
      <TableCell className="col-span-1 px-4 after:hidden grow-0">
        <Checkbox id="single" />
      </TableCell>
      <TableCell className="col-span-1 text-theme-main">{id}</TableCell>
      <TableCell className="col-span-3">
        <div className="flex gap-3">
          <Avatar id={id} width={34} height={34} />
          <div className=" ">
            <p className="text-primary text-sm">{name}</p>
            <p className="text-secondary">{mail}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="col-span-1 text-secondary text-sm">
        {totalBalance}
      </TableCell>

      <TableCell className="col-span-2 text-secondary text-sm">
        {issueDate}
      </TableCell>
      <TableCell className="col-span-2 text-primary text-sm">
        {hasPaid ? 'Paid' : balance}
      </TableCell>
      <TableCell className="col-span-2 gap-4">
        <TrashIcon className="fill-secondary" />
        <EyeIcon className="fill-secondary" />
      </TableCell>
    </tr>
  );
};

export const TableFooter = () => {
  return (
    <div className="flex justify-end py-1.5">
      <ChevronLeftIcon />
      <ChevronRightIcon />
    </div>
  );
};
