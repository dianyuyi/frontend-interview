"use client";

import { useState } from "react";

type TodoItem = {
  id: number;
  name: string;
  isCompleted: boolean;
};

const todo = [
  {
    id: 1,
    name: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Visit doctor",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Go jogging",
    isCompleted: false,
  },
];

export default function TodoList() {
  const [list, setList] = useState<TodoItem[]>([...todo]);

  function handleClick(index: number) {
    setList((prevList) =>
      prevList.map((item, idx) =>
        idx === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  return (
    <>
      {list.map((item, index) => (
        <Button
          key={item.id}
          id={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
          onClick={() => handleClick(index)}
        />
      ))}
    </>
  );
}

function Button({
  id,
  name,
  isCompleted,
  onClick,
}: {
  id: number;
  name: string;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <button key={id} className="flex gap-2" onClick={onClick}>
      {isCompleted ? <p>✅</p> : <p>❌</p>}
      <p>{name}</p>
    </button>
  );
}
