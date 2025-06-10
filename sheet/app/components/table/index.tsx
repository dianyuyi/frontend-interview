'use client';

import React, { useState, useCallback } from 'react';
import useSWR from 'swr';

import { useDebounce } from '@/hooks/useDebounce';
import { ResponseData, mockFetch, PageParams } from '@/api/mock';
import { PAGINATION_PAGE_SIZE } from '@/constants';

import ActionBar from './presentation/ActionBar';
import { TableHead } from './presentation/TableHead';
import { TableRow } from './presentation/TableRow';
import Pagination from './presentation/Pagination';
import Error from './presentation/error';
import Loading from './presentation/loading';

const Table = () => {
  const [params, setParams] = useState<PageParams>({
    page: 1,
    pageSize: PAGINATION_PAGE_SIZE,
  });
  const [search, setSearch] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const debouncedSearch = useDebounce(search, 500);

  const {
    data: responseData,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<ResponseData>(
    ['users', params.page, params.pageSize, debouncedSearch],
    () => mockFetch({ ...params, search }),
    {
      errorRetryCount: 0,
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );
  const onDelete = useCallback(
    (ids?: number[]) => {
      if (!responseData?.data?.length || !ids?.length) {
        return;
      }
      const updatedData = responseData.data.filter(
        (item) => !ids.includes(item.id)
      );
      mutate(
        {
          ...responseData,
          data: updatedData,
        },
        false
      );
    },
    [mutate, responseData]
  );

  const onPageChange = (page: number) => {
    setParams((prev) => ({ ...prev, page }));
  };

  const onSelectedIdsChange = (selectedId: number) => {
    setSelectedIds((prev) =>
      prev.includes(selectedId)
        ? prev.filter((id) => id !== selectedId)
        : [...prev, selectedId]
    );
  };

  const resetAllIds = () => {
    setSelectedIds([]);
  };

  const onSelectedAllIds = (isAllSelected: boolean) => {
    if (isAllSelected) {
      resetAllIds();
    }
    const allIds = responseData?.data?.map((item) => item.id) || [];
    setSelectedIds(allIds);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setParams((prev) => ({ ...prev, page: 1 }));
    resetAllIds();
  };

  const onRefresh = () => {
    resetAllIds();
    mutate();
  };

  const isFetching = isLoading || isValidating;

  if (!isFetching && error) {
    return (
      <div>
        <Error isEmpty={false} onRefresh={onRefresh} />
      </div>
    );
  }
  if (!isFetching && !error && !responseData?.data) {
    return <Error isEmpty={true} onRefresh={onRefresh} />;
  }

  return (
    <div className="flex flex-col shadow-paper ">
      <ActionBar
        search={search}
        onSearch={onSearch}
        onDeleteAll={() => onDelete(selectedIds)}
        onRefresh={onRefresh}
      />
      <table className="w-full">
        <thead className="border-b bg-page-header">
          <TableHead
            allSelected={selectedIds?.length === responseData?.data?.length}
            onSelectedAllIds={onSelectedAllIds}
          />
        </thead>

        {isFetching ? (
          <Loading />
        ) : (
          <tbody>
            {responseData?.data?.map((value, idx) => (
              <TableRow
                key={`User-#${value.id}-${idx}`}
                data={value}
                selectedIds={selectedIds}
                onSelectedIdsChange={onSelectedIdsChange}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        )}
      </table>
      <Pagination
        total={responseData?.totalCount}
        page={params.page}
        pageSize={params.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Table;
