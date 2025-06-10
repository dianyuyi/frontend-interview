import React from 'react';

import { TableCell } from './TableRow';
import { Skeleton } from '@/ui/Skeleton';

const Loading = () => {
  return (
    <tbody>
      {Array.from({ length: 10 }).map((_, idx) => (
        <tr key={idx} className="grid grid-cols-12 items-center">
          <TableCell className="col-span-1 px-4 after:hidden grow-0 ">
            <Skeleton />
          </TableCell>
          <TableCell className="col-span-1 ">
            <Skeleton />
          </TableCell>
          <TableCell className="col-span-3 ">
            <Skeleton />
          </TableCell>
          <TableCell className="col-span-1 ">
            <Skeleton />
          </TableCell>
          <TableCell className="col-span-2 ">
            <Skeleton />
          </TableCell>
          <TableCell className="col-span-2 ">
            <Skeleton />
          </TableCell>
          <TableCell className="col-span-2 ">
            <Skeleton />
          </TableCell>
        </tr>
      ))}
    </tbody>
  );
};

export default Loading;
