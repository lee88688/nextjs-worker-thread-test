import { parentPort, workerData } from 'node:worker_threads'

const end: number = workerData.end

let sum = 0
for (let i = 0; i< end; i++) {
    sum += i
}

parentPort?.postMessage({ sum })