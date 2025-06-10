'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import { ActionBar, TableHead, TableRow, TableFooter } from './presentation';
import { mockFetch } from '@/api/mock';
import Error from './presentation/error';

import Loading from './presentation/loading';

const Table = () => {
  const [params, setParams] = useState({
    page: 1,
    pageSize: 10,
  });
  const { data, error, isLoading, isValidating } = useSWR(
    ['users', params.page, params.pageSize],
    () => mockFetch(params),
    {
      errorRetryCount: 0,
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );

  const isFetching = isLoading || isValidating;

  if (!isFetching && error) {
    return (
      <div>
        <Error isEmpty={!data?.length} />
      </div>
    );
  }

  return (
    <div className="flex flex-col shadow-paper ">
      <ActionBar />
      <table className="w-full">
        <thead className="border-b bg-page-header">
          <TableHead />
        </thead>

        {isFetching ? (
          <Loading />
        ) : (
          <tbody>
            {data?.map((value, idx) => <TableRow key={idx} data={value} />)}
          </tbody>
        )}
        <TableFooter />
      </table>
    </div>
  );
};

export default Table;
