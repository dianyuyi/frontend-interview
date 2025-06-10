export const formatId = (id: number): string => {
  const idStr = id.toString();
  const padded = idStr.padStart(4, '0');
  return padded;
};

export const getAvatarUrl = (id: number) => `/avatar-${id % 8 || 8}.webp`;

export const PaidStatus = (hasPaid: boolean) => (
  <span
    className={`rounded-full px-2.5 py-1 ${hasPaid ? 'text-success-secondary bg-success-main/12' : 'bg-warning-secondary text-white'}`}
  >
    {hasPaid ? 'Paid' : 'Unpaid'}
  </span>
);

export const getPageNum = (
  total: number | undefined,
  page: number,
  pageSize: number
) => {
  if (!total || typeof total !== 'number') {
    return { allPage: 0, start: 0, end: 0 };
  }
  let allPage = Math.ceil(total / pageSize);
  let start = pageSize * (page - 1) + 1;
  let end = pageSize * page;
  if (end > total) {
    end = total;
  }

  return { allPage, start, end };
};
