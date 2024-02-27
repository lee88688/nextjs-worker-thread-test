'use client';

import { useState, PropsWithChildren } from 'react';

export default function Button(props: PropsWithChildren) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {props.children}
      <button onClick={() => setCount((c) => c + 1)}>click {count}</button>
    </div>
  );
}