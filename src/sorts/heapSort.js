import { timer } from "../utils"

async function maxHeap(input, i, arrLength, setData) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i

  if (left < arrLength && input[left] > input[max]) {
    max = left
  }

  if (right < arrLength && input[right] > input[max]) {
    max = right
  }

  if (max !== i) {
    swap(input, i, max)
    setData([...input])
    await timer(100)

    await maxHeap(input, max, arrLength, setData)
  }
}

function swap(input, indexA, indexB) {
  const temp = input[indexA]

  input[indexA] = input[indexB]
  input[indexB] = temp
}

export default async function heapSort(input, setData) {
  let arrLength = input.length

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    await maxHeap(input, i, arrLength, setData)
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i)
    arrLength--
    setData([...input])
    await timer(100)

    await maxHeap(input, 0, arrLength, setData)
  }
  return
}
