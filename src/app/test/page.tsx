"use client";
import { ReactNode, useEffect, useState } from "react";
import { update, mutate, authMutate, calculateSum } from "./actions";

export default function Test() {
  const [dom, setDom] = useState<ReactNode>()
  
  useEffect(() => {
    const worker = new Worker(new URL('@/worker/web.worker.ts', import.meta.url))
    worker.postMessage({ data: 'hello world' })
  }, [])
  
  return (
    <>
      <button
        onClick={async () => {
          const res = await calculateSum({ end: 12 });
          console.log(res);
        }}
      >
        test
      </button>
      {dom}
    </>
  );
}
