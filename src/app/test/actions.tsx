"use server";

import { Worker } from 'worker_threads'
import * as path from 'path'

export async function update(formData: Record<string, string>) {
  console.log(formData);
  return { a: 1 };
}

export const mutate = (data: Record<string, string>) => {
  console.log(data);
  return (
    <div>
      {Object.entries(data).map((item, index) => (
        <div key={index}>
          <span style={{ fontWeight: "bold" }}>{item[0]}:</span>
          {item[1]}
        </div>
      ))}
    </div>
  );
};

export const authMutate = (data: unknown) => {
  console.log(data);
  return { a: 1 };
};

export const calculateSum = async (data: { end: number }) => {
  // const { add } = await import('./utils')
  // return add(1, 2)

  console.log(import.meta.url)
  const { getRootPath } = await import('@/worker/getRootPath')
  console.log(getRootPath())
  // const worker = new Worker(path.resolve(getRootPath(), './worker'), { workerData: {end: 12}})
  const worker = new Worker(new URL('@/worker/test.worker.ts', import.meta.url), { workerData: {end: 12}})
  return new Promise(resolve => {
    worker.on('message', (value: {sum: number}) => {
      resolve(value)
    })
  })
}
