import { timer } from "../utils"

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}
async function partition(items, left, right, setData) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j) //swapping two elements
      i++
      j--
      setData([...items])
      await timer(100)
    }
  }
  return i
}

async function quickSort(items, left, right, setData) {
  var index
  if (items.length > 1) {
    index = await partition(items, left, right, setData) //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1, setData)
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right, setData)
    }
  }
  return items
}

export default async function qs(data, setData) {
  return await quickSort(data, 0, data.length - 1, setData)
}
