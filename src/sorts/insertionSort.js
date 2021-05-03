import { timer, waitForInteraction } from "../utils"
import { shuffleArray } from "../utils"

export default async function insertionSort(inputArr, setArr) {
  let arr = Array.from(inputArr)
  let n = arr.length
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i]
    // The last element of our sorted subarray
    let j = i - 1
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j]
      j--
      setArr([...arr])
      await timer(100)
    }
    arr[j + 1] = current
  }
}

export function getInsertionSortData() {
  return {
    array: shuffleArray(Array.from(Array(50).keys())),
    i: 0,
    j: 0,
    current: 0,
  }
}

export function getInsertionSortInfo() {
  return {
    title: "Insertion Sort Algorithm",
    description:
      "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
    dataInfo: {
      array: {
        type: "array",
        description: "Used to make comparisons and to store the final ouput",
      },
      i: {
        type: "integer",
        description: "The index of the current item we are trying to sort.",
      },
      current: {
        type: "integer",
        description: "The current value of the item we are trying to sort",
      },
      j: {
        type: "integer",
        description:
          "The index of the item being compared to the current item. If the current item is less than the item at index j, move the item at j to j + 1.",
      },
    },
  }
}

export async function insertionSortV2(data, setData, interactiveMode = false) {
  let arr = Array.from(data.array)
  let n = arr.length
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i]
    // The last element of our sorted subarray
    let j = i - 1
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j]
      j--
      setData({ i, j, current, array: arr })
      await timer(100)
      if (interactiveMode) {
        await waitForInteraction()
      }
    }
    arr[j + 1] = current
  }
}
