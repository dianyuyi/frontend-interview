import { useEffect, useState } from "react";

// 假設mockFetch是一個3秒後回傳API結果的function

type List = {
  id: number;
  name: string;
};

export default function Menu() {
  const [menuList, setMenuList] = useState<List[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      const data = await mockFetch();
      setMenuList(data);
      setIsFetching(false);
    }
    fetchData();
  }, []);

  if (isFetching) {
    return (
      <div>
        {Array.from({ length: 4 }).map((_, idx) => (
          <ul key={idx}>
            <li className="w-full h-4 my-1 animate-pulse bg-gray-200 rounded"></li>
          </ul>
        ))}
      </div>
    );
  }

  if (menuList.length === 0) {
    return null;
  }

  return (
    <div className="px-4">
      {menuList.map((item) => (
        <ul key={item.id}>
          <li className="list-disc">{item.name}</li>
        </ul>
      ))}
    </div>
  );
}

function mockFetch(): Promise<List[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "steak",
        },
        {
          id: 2,
          name: "chicken",
        },
      ]);
    }, 3000);
  });
}
